var Renderer = {
    Particle_Count: 1500,
    Particle_Radius: 1,
    Max_Rotation_Angle: Math.PI / 60,
    Translation_Count: 500,
    init: function (strategy) {
        this.setParameters(strategy)  //设置参数
        this.createPaticles(); //创建粒子
        this.setupFigure();//改变形状
        this.reconstructMethod();//
        this.bindEvent();//绑定时间
        this.drawFigure();  //
    },
    setParameters: function (strategy) {
        this.$window = $(window);
        this.container = $('#jsi-particle-container')
        this.width = this.$container.width();
        this.height = this.$container.height();
        this.$canvas = $('<canvas />').attr({ width: this.width, height: this.height }).appendTo(this.$container);
        this.context = this.$canvas.get(0).getContext('2d');
        //-----------------------------------------------
        this.center = { x: this.width / 2, y: this.height / 2 };
        this.rotationX = this.Max_Rotation_Angle;
        this.rotationY = this.Max_Rotation_Angle;
        this.strategyIndex = 0;
        this.TranslationCount = 0;
        this.theta = 0;   //阿尔法 。。伽马
        this.strategies = strategy.getStrategies();
        this.particles = [];
    },

    createPaticles: function () {//创建粒子
        for (var i = 0; i < this.Particle_Count; i++) {
            this.particles.push(new Particle(this.center));
        }
    },
    reconstructMethod: function () {
        this.setupFigure = this.setupFigure.bind(this);
        this.drawFigure = this.drawFigure.bind(this);
        this.changeAngle = this.changeAngle.bind(this);
    },
    bindEvent: function () {
        //绑定鼠标事件
        this.$container.on('click', this.setupFigure);
        this.$container.on('mousemove', this.changeAngle);
    },
    changeAngle: function (event) {
        var offset = this.$container.offset();
        //鼠标位置x - 标签left +滚动条left 
        x = event.clientX - offset.left + this.$window.scrollLeft();
        y = event.clientY - offset.top + this.$window.scrollTop();
        this.rotationX = (this.center.y - y) / this.center.y * this.Max_Rotation_Angle;
        this.rotationY = (this.center.x - x) / this.center.x * this.Max_Rotation_Angle;
    },

    setupFigure: function () {
        for (var i = 0, length = this.particles.length; i < length; i++) {
            //每个粒子设置
            this.particles[i].setAxis(this.strategies[this.strategyIndex]());
        }
        if (++this.strategyIndex == this.strategies.length) {
            this.strategyIndex = 0;
        }
        this.TranslationCount = 0;
    },

    drawFigure: function () {
        requestAnimationFrame(this.drawFigure);//重绘函数
        //fillRect() 方法绘制“已填色”的矩形。默认的填充颜色是黑色。
        //fillStyle 属性来设置用于填充绘图的颜色、渐变或模式。
        this.context.fillStyle = 'rgba(0,0,0,0.2)';
        this.context.fillRect(0, 0, this.width, this.height);
        for (var i = 0, length = this.particles.length; i < length; i++) {
            //获取粒子角度
            var axis = this.particles[i].getAxis2D(this.theta);
            this.context.beginPath();
            this.context.fillStyle = axis.color;
            this.context.arc(axis.x, axis.y, this.Particle_Radius, 0, Math.pi, false);
            this.context.fill();
        }
        this.theta++;
        this.theta %= 360;

        for (var i = 0, length = this.particles.length; i < length; i++) {//转动粒子
            this.particles[i].rotationX(this.rotationX);
            this.particles[i].rotationY(this.rotationY);
        }
        this.TranslationCount++;
        this.TranslationCount %= this.Translation_Count;
        if (this.TranslationCount == 0) {
            this.setupFigure();
        }
    }
};
//图形
var Strategy = {
    SCATTER_RADIUS :150,
    CONE_ASPECT_RATIO:1.5,
    RING_COUNT:5,
    //绑定样式
    getStrategies:function(){
    var strategies = [];
    for(var i in this){
        if(this[i] ==arguments.callee||typeof this[i]!='function'){
            continue;
        }
        strategies.push(this[i].bind(this));
    }
    return strategies;
    },

    createSphere :function(){
        var cosTheta = Math.random()*2-1,
        sinTheta = Math.sqrt(1 - cosTheta *cosTheta),
        phi = Math.random(0 *2 *Math.PI);

        return{
            x:this.SCATTER_RADIUS*sinTheta*Math.cos(phi),
            y:this.SCATTER_RADIUS*sinTheta*Math.sin(phi),
            z: this.SCATTER_RADIUS*cosTheta,
            hue:Math.round(phi/Math.PI*30)
        };
    },

    createTorus:function(){
        var theta =Math.random()*Math.PI*2,
        x = this.SCATTER_RADIUS+this.SCATTER_RADIUS/6*Math.cos(theta),
        y = this.SCATTER_RADIUS/6 *Math.sin(theta),
        phi = math.random()*Math.PI*2;

        return {
            x:x*Math.cos(phi),
            y:y,
            z:x*Math.sin(phi),
            hue:Math.round(phi/math.PI *30)
        };
    },

    createCone:function(){
        var status = Math.random() >1/3,
        x,
        y,
        phi = Math.random() *Math.PI *2,
        rate = Math.tan(30/180*Math.PI)/this.CONE_ASPECT_RATIO;

        if(status){
            y = this.SCATTER_RADIUS*(1-Math.random()*2);
            x = (this.SCATTER_RADIUS - y)*rate;
        }else {
            y = -this.SCATTER_RADIUS;
            x= this.SCATTER_RADIUS*2*rate*Math.random();
        }
        return  {
            x:x*Math.cos(phi),
            y:y,
            z:x*Math.sin(phi),
            hue:Math.round(phi/Math.PI*30)
        };
    },

    createVase:function(){
        var theta  =Math.random()*Math.PI,
        x = Math.abs(this.SCATTER_RADIUS*Math.cos(theta)/2)+this.SCATTER_RADIUS/8,
        y = this.SCATTER_RADIUS*Math.cos(theta)*1.2,
        phi =Math.random()*Math.PI*2;

        return{
            x:x*Math.cos(phi),
            y:y,
            z:x*Math.sin(phi),
            hue:Math.round(phi/Math.PI*30)
        };
    }
    };

    var Particle = function(center){
        this.center = center;
        this.init();
    }

    Particle.prototype = {
        SPRING:0.01,
        FRICTION:0.9,
        FOCUS_POSITION:300,
        COLOR : 'hsl(%hue, 100%, 70%)',
        init : function(){
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.vx = 0;
            this.vy = 0;
            this.vz = 0;
            this.color;
        },
        setAxis : function(axis){
            this.translating = true;
            this.nextX = axis.x;
            this.nextY = axis.y;
            this.nextZ = axis.z;
            this.hue = axis.hue;
        },
        rotateX : function(angle){
            var sin = Math.sin(angle),
                cos = Math.cos(angle),
                nextY = this.nextY * cos - this.nextZ * sin,
                nextZ = this.nextZ * cos + this.nextY * sin,
                y = this.y * cos - this.z * sin,
                z = this.z * cos + this.y * sin;
                
            this.nextY = nextY;
            this.nextZ = nextZ;
            this.y = y;
            this.z = z;
        },
        rotateY : function(angle){
            var sin = Math.sin(angle),
                cos = Math.cos(angle),
                nextX = this.nextX * cos - this.nextZ * sin,
                nextZ = this.nextZ * cos + this.nextX * sin,
                x = this.x * cos - this.z * sin,
                z = this.z * cos + this.x * sin;
                
            this.nextX = nextX;
            this.nextZ = nextZ;
            this.x = x;
            this.z = z;
        },
        rotateZ : function(angle){
            var sin = Math.sin(angle),
                cos = Math.cos(angle),
                nextX = this.nextX * cos - this.nextY * sin,
                nextY = this.nextY * cos + this.nextX * sin,
                x = this.x * cos - this.y * sin,
                y = this.y * cos + this.x * sin;
                
            this.nextX = nextX;
            this.nextY = nextY;
            this.x = x;
            this.y = y;
        },
        getAxis3D : function(){
            this.vx += (this.nextX - this.x) * this.SPRING;
            this.vy += (this.nextY - this.y) * this.SPRING;
            this.vz += (this.nextZ - this.z) * this.SPRING;
            
            this.vx *= this.FRICTION;
            this.vy *= this.FRICTION;
            this.vz *= this.FRICTION;
            
            this.x += this.vx;
            this.y += this.vy;
            this.z += this.vz;
            
            return {x : this.x, y : this.y, z : this.z};
        },
        getAxis2D : function(theta){
            var axis = this.getAxis3D(),
                scale = this.FOCUS_POSITION / (this.FOCUS_POSITION + axis.z);
                
            return {x : this.center.x + axis.x * scale, y : this.center.y - axis.y * scale, color : this.COLOR.replace('%hue', this.hue + theta)};
        }
    };
    $(function(){
        RENDERER.init(STRATEGY);
    });







