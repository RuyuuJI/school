USE HBDL55_Workflow
delete from S_WF_DefFlow where ID = 'aaf700b2-87f2-4d17-90fc-c4059be3677b'

INSERT INTO[S_WF_DefFlow]
    (ID, Code, Name, ConnName, TableName, FormUrl, FormWidth, FormHeight, FlowNameTemplete, FlowCategorytemplete, FlowSubCategoryTemplete, TaskNameTemplete, TaskCategoryTemplete, TaskSubCategoryTemplete, InitVariable, AllowDeleteForm, SendMsgToApplicant, ViewConfig, ModifyTime, CategoryID, Description, FormNumberPartA, FormNumberPartB, FormNumberPartC, AlreadyReleased, MsgSendToAll, CreateUserID, CreateUserName, CreateTime, ModifyUserID, ModifyUserName, Collision, isFlowChart)
VALUES
    ('aaf700b2-87f2-4d17-90fc-c4059be3677b', 'ContractManagementEditcopy', '合同确认', 'Market', 'S_E_ContractManagement', '/MvcConfig/UI/Form/PageView?TmplCode=ContractManagementEditcopy', '', '', '合同确认', '', '', '{StepName}-表单名(业务字段：{ID})', '', '', '', '0', '0', '{states:{rect1:{type:''start'',ID:''aaf700b2-a9b7-4b27-a172-41bc826a18d0'',text:{text:''''}, attr:{ x:71, y:237, width:48, height:48}},rect2:{type:''end'',ID:''aaf700b2-ab04-4c71-a1ca-1ace5fc1002f'',text:{text:''结束''}, attr:{ x:380, y:220, width:50, height:48}},rect3:{type:''task'',ID:''aaf700b2-ad2a-489f-b750-dfec6fd15488'',text:{text:''部门负责人''}, attr:{ x:161, y:235, width:48, height:48}},rect4:{type:''task'',ID:''aaf700b2-af25-4880-ae8b-f60a3458cb84'',text:{text:''经营生产管理负责人''}, attr:{ x:279, y:229, width:48, height:48}}},paths:{path5:{lineID:''aaf700b2-b39c-4486-b205-879b195abc71'',from:''rect1'',to:''rect3'', dots:[],text:{text:'''',textPos:{x:0,y:-10}}, props:{text:{value:''''}}},path6:{lineID:''aaf700b2-b54a-4b92-bec8-ac6cd0623e55'',from:''rect3'',to:''rect4'', dots:[],text:{text:'''',textPos:{x:0,y:-10}}, props:{text:{value:''''}}},path7:{lineID:''aaf700b2-b701-4d5b-99e0-dab048bdcf76'',from:''rect4'',to:''rect2'', dots:[],text:{text:'''',textPos:{x:0,y:-10}}, props:{text:{value:''''}}}}}', '2019/10/31 17:23:54', '2', '', '', '', '', '0', '0', 'a93500bc-13e4-4596-a4e9-c87887cc1a55', '管理员', '2019/10/31 10:50:22', 'a93500bc-13e4-4596-a4e9-c87887cc1a55', '管理员', '', '0')




INSERT INTO[S_WF_DefStep]
    (ID, DefFlowID, SubFormID, Code, Name, Type, SortIndex, AllowDelegate, AllowCirculate, AllowAsk, AllowSave, SaveVariableAuth, SubFlowCode, WaitingStepIDs, CooperationMode, Phase, HiddenElements, VisibleElements, EditableElements, DisableElements, Urgency, KeepWhenEnd, AllowDoBackFirst, AllowDoBackFirstReturn, DoBackSignField, AllowToMobile, HideAdvice, EmptyToStep, NameEN, DoBackButtonText)
VALUES
    ('aaf700b2-a9b7-4b27-a172-41bc826a18d0', 'aaf700b2-87f2-4d17-90fc-c4059be3677b', '', '', '', 'Inital', '0', '0', '0', '0', '0', '', '', '', 'Single', 'Processing', '', '', '', '', '', '0', '1', '0', '', '0', '0', '', 'Start', '')


INSERT INTO[S_WF_DefStep]
    (ID, DefFlowID, SubFormID, Code, Name, Type, SortIndex, AllowDelegate, AllowCirculate, AllowAsk, AllowSave, SaveVariableAuth, SubFlowCode, WaitingStepIDs, CooperationMode, Phase, HiddenElements, VisibleElements, EditableElements, DisableElements, Urgency, KeepWhenEnd, AllowDoBackFirst, AllowDoBackFirstReturn, DoBackSignField, AllowToMobile, HideAdvice, EmptyToStep, NameEN, DoBackButtonText)
VALUES
    ('aaf700b2-ab04-4c71-a1ca-1ace5fc1002f', 'aaf700b2-87f2-4d17-90fc-c4059be3677b', '', 'End', '结束', 'Completion', '1', '0', '0', '0', '0', '', '', '', 'Single', 'End', '', '', '', '', '', '0', '1', '0', '', '0', '0', '', 'End', '')


INSERT INTO[S_WF_DefStep]
    (ID, DefFlowID, SubFormID, Code, Name, Type, SortIndex, AllowDelegate, AllowCirculate, AllowAsk, AllowSave, SaveVariableAuth, SubFlowCode, WaitingStepIDs, CooperationMode, Phase, HiddenElements, VisibleElements, EditableElements, DisableElements, Urgency, KeepWhenEnd, AllowDoBackFirst, AllowDoBackFirstReturn, DoBackSignField, AllowToMobile, HideAdvice, EmptyToStep, NameEN, DoBackButtonText)
VALUES
    ('aaf700b2-ad2a-489f-b750-dfec6fd15488', 'aaf700b2-87f2-4d17-90fc-c4059be3677b', '', '', '部门负责人', 'Normal', '2', '0', '0', '0', '0', '', '', '', 'Single', 'Processing', '', '', '', '', '', '0', '1', '0', '', '0', '0', '', 'Node', '')


INSERT INTO[S_WF_DefStep]
    (ID, DefFlowID, SubFormID, Code, Name, Type, SortIndex, AllowDelegate, AllowCirculate, AllowAsk, AllowSave, SaveVariableAuth, SubFlowCode, WaitingStepIDs, CooperationMode, Phase, HiddenElements, VisibleElements, EditableElements, DisableElements, Urgency, KeepWhenEnd, AllowDoBackFirst, AllowDoBackFirstReturn, DoBackSignField, AllowToMobile, HideAdvice, EmptyToStep, NameEN, DoBackButtonText)
VALUES
    ('aaf700b2-af25-4880-ae8b-f60a3458cb84', 'aaf700b2-87f2-4d17-90fc-c4059be3677b', '', '', '经营生产管理负责人', 'Normal', '3', '0', '0', '0', '0', '', '', '', 'Single', 'Processing', '', '', '', '', '', '0', '1', '0', '', '0', '0', '', 'Node', '')



INSERT INTO[S_WF_DefRouting]
    (ID, DefFlowID, DefStepID, EndID, Code, Name, Type, Value, NotNullFields, VariableSet, FormDataSet, SaveForm, MustInputComment, SaveFormVersion, DefaultComment, SignatureField, SignatureProtectFields, SignatureDivID, SignatureCancelDivIDs, SortIndex, AuthFormData, AuthTargetUser, AuthOrgIDs, AuthOrgNames, AuthRoleIDs, AuthRoleNames, AuthUserIDs, AuthUserNames, AuthVariable, UserIDs, UserNames, UserIDsFromStep, UserIDsFromStepSender, UserIDsFromStepExec, UserIDsFromField, UserIDsGroupFromField, RoleIDs, RoleNames, RoleIDsFromField, OrgIDs, OrgNames, OrgIDFromField, OrgIDFromUser, SelectMode, SelectAgain, AllowWithdraw, Title, AllowDoBack, OnlyDoBack, MsgUserIDs, MsgUserNames, MsgUserIDsFromStepExec, MsgUserIDsFromStep, MsgUserIDsFromStepSender, MsgUserIDsFromField, MsgRoleIDs, MsgRoleIDsFromField, MsgOrgIDs, MsgOrgIDFromUser, MsgOrgIDsFromField, MsgTmpl, MsgType, MsgSendToTaskUser, DenyAutoPass, ExcludeUser, MsgRoleNames, MsgOrgNames, InputSignPwd, AuthFromSql, UserIDsFromSql, AuthFromSqlMemo, SignatureType, ExecLogic, NameEN)
VALUES
    ('aaf700b2-b39c-4486-b205-879b195abc71', 'aaf700b2-87f2-4d17-90fc-c4059be3677b', 'aaf700b2-a9b7-4b27-a172-41bc826a18d0', 'aaf700b2-ad2a-489f-b750-dfec6fd15488', '', '送部门负责人', 'Normal', '', '', '', '', '1', '1', ' ', '', '', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'a98b00ae-7393-4d2b-a61b-f833d153e046', '部门负责人', '', '', '', '', '', 'SelectOneUser', '0', '1', '', '1', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '', '', '', '0', '', '', '', '', '[]', '')


INSERT INTO[S_WF_DefRouting]
    (ID, DefFlowID, DefStepID, EndID, Code, Name, Type, Value, NotNullFields, VariableSet, FormDataSet, SaveForm, MustInputComment, SaveFormVersion, DefaultComment, SignatureField, SignatureProtectFields, SignatureDivID, SignatureCancelDivIDs, SortIndex, AuthFormData, AuthTargetUser, AuthOrgIDs, AuthOrgNames, AuthRoleIDs, AuthRoleNames, AuthUserIDs, AuthUserNames, AuthVariable, UserIDs, UserNames, UserIDsFromStep, UserIDsFromStepSender, UserIDsFromStepExec, UserIDsFromField, UserIDsGroupFromField, RoleIDs, RoleNames, RoleIDsFromField, OrgIDs, OrgNames, OrgIDFromField, OrgIDFromUser, SelectMode, SelectAgain, AllowWithdraw, Title, AllowDoBack, OnlyDoBack, MsgUserIDs, MsgUserNames, MsgUserIDsFromStepExec, MsgUserIDsFromStep, MsgUserIDsFromStepSender, MsgUserIDsFromField, MsgRoleIDs, MsgRoleIDsFromField, MsgOrgIDs, MsgOrgIDFromUser, MsgOrgIDsFromField, MsgTmpl, MsgType, MsgSendToTaskUser, DenyAutoPass, ExcludeUser, MsgRoleNames, MsgOrgNames, InputSignPwd, AuthFromSql, UserIDsFromSql, AuthFromSqlMemo, SignatureType, ExecLogic, NameEN)
VALUES
    ('aaf700b2-b54a-4b92-bec8-ac6cd0623e55', 'aaf700b2-87f2-4d17-90fc-c4059be3677b', 'aaf700b2-ad2a-489f-b750-dfec6fd15488', 'aaf700b2-af25-4880-ae8b-f60a3458cb84', '', '送经营生产管理负责人', 'Normal', '', '', '', '', '1', '1', ' ', '', '', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'a98b00ae-7393-4d2b-a61b-f833d153e046', '部门负责人', '', 'aa9a00b3-e9af-4627-aed3-fd5e2453da7e', '经营生产管理部', '', '', 'SelectOneUser', '0', '1', '', '1', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '', '', '', '0', '', '', '', '', '[]', '')


INSERT INTO[S_WF_DefRouting]
    (ID, DefFlowID, DefStepID, EndID, Code, Name, Type, Value, NotNullFields, VariableSet, FormDataSet, SaveForm, MustInputComment, SaveFormVersion, DefaultComment, SignatureField, SignatureProtectFields, SignatureDivID, SignatureCancelDivIDs, SortIndex, AuthFormData, AuthTargetUser, AuthOrgIDs, AuthOrgNames, AuthRoleIDs, AuthRoleNames, AuthUserIDs, AuthUserNames, AuthVariable, UserIDs, UserNames, UserIDsFromStep, UserIDsFromStepSender, UserIDsFromStepExec, UserIDsFromField, UserIDsGroupFromField, RoleIDs, RoleNames, RoleIDsFromField, OrgIDs, OrgNames, OrgIDFromField, OrgIDFromUser, SelectMode, SelectAgain, AllowWithdraw, Title, AllowDoBack, OnlyDoBack, MsgUserIDs, MsgUserNames, MsgUserIDsFromStepExec, MsgUserIDsFromStep, MsgUserIDsFromStepSender, MsgUserIDsFromField, MsgRoleIDs, MsgRoleIDsFromField, MsgOrgIDs, MsgOrgIDFromUser, MsgOrgIDsFromField, MsgTmpl, MsgType, MsgSendToTaskUser, DenyAutoPass, ExcludeUser, MsgRoleNames, MsgOrgNames, InputSignPwd, AuthFromSql, UserIDsFromSql, AuthFromSqlMemo, SignatureType, ExecLogic, NameEN)
VALUES
    ('aaf700b2-b701-4d5b-99e0-dab048bdcf76', 'aaf700b2-87f2-4d17-90fc-c4059be3677b', 'aaf700b2-af25-4880-ae8b-f60a3458cb84', 'aaf700b2-ab04-4c71-a1ca-1ace5fc1002f', 'End', '结束', 'Normal', '', '', '', '', '1', '1', ' ', '', '', '', '', '', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '1', '', '1', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', '0', '', '', '', '0', '', '', '', '', '[]', 'End')



var ContractServer = "";
function onFormSetData(data) {
    var ID = getQueryString("ID");
    setFormItemDisabled("ContractCode");
    setFormItemDisabled("ContractValue");
    setFormItemDisabled("CreateUser");
    setFormItemDisabled("CreateDate");
    setFormItemDisabled("ContractField");
    setFormItemDisabled("Code");
    setFormItemDisabled("ContractCode");
    setFormItemDisabled("ContractValue");
    mini.getbyName("CommonAttachment").setValue("");

    if (ID == "") {
        mini.getbyName("DeptType").setValue(getQueryString("DeptType"));
        var startType = getQueryString("StartType");
        if (startType != "")
            mini.getbyName("StartType").setValue(startType);
        var flcsID = "";
        var flcsName = "";
        for (var i = 0; i < FLBCS.length; i++) {
            flcsID += FLBCS[i].ID + ",";
            flcsName += FLBCS[i].Name + ",";
        }
        mini.getbyName("SetLawUser").setValue(flcsID);
        mini.getbyName("SetLawUser").setText(flcsName);
        var gkbmID = "";
        var gkbmName = "";
        for (var i = 0; i < UnderDept.length; i++) {
            gkbmID += UnderDept[i].ID + ",";
            gkbmName += UnderDept[i].Name + ",";
        }
        mini.getbyName("UnderDeptUser").setValue(gkbmID);
        mini.getbyName("UnderDeptUser").setText(gkbmName);
    }

    SetIsHide();
    if (mini.getbyName("Advice") != null) {
        if (FlowCurrentStepCode.indexOf("Start") != -1) {//流程定义不能包含start（除开始）
            if (mini.getbyName("IsReject").getValue() != "T") {//判断是否是驳回的 如果驳回的 则要显示意见框 =="T" 表示驳回
                setFormItemDisabled("ReviseAttachment");
                mini.getbyName("Advice").setValue("请审批");
                //mini.get("formlayout").getRegion("north").height = 30;
                $("#north").height(30);
                $("#center").css("top", "30px");
                $("#adviceTable").hide();
            }
            else {
                setFormItemDisabled("Attachment");

                //mini.getbyName("BraceAttachment")._btnDel.hide();
                mini.getbyName("BraceAttachment")._btnClear.hide();
                if (FlowCurrentStepCode.indexOf("Fun") <= -1) {
                    mini.getbyName("Advice").setValue("已修改,请审批");
                } else { mini.getbyName("Advice").setValue("同意"); }
            }

        }
        else
            mini.getbyName("Advice").setValue("同意");
    }
}
//addSingleOrgSelectorByUser("Dept", "/Market/Flow/Selector/ChooseCurrentUserOrgNames?SelectMode=Single");

addMultiUserSelectorByRole("UnderDeptUser");
//选择器窗口关闭触发
function onSelected(data, settings) {
    if (data == undefined || typeof (data) != "object" || typeof (data) == "undefined")
        return;
    if (data.rolekey && data.rolekey != "") {
        mini.getbyName("UnderDeptCode").setValue(data.rolekey);
        data = data.data;
    }
    //用返回值设置表单
    if (settings.targetType == "form") {
        getSettings(selectorSettingss, settings.name).data = data;
        var selector = mini.get(settings.selectorId);
        if (!selector)
            selector = mini.getbyName(settings.selectorId);

        //设置value和text
        if (selector.uiCls == "mini-buttonedit") {
            var arrReturnParam = settings.returnParams.split(',');
            for (var i = 0; i < arrReturnParam.length; i++) {
                var field = arrReturnParam[i].split(':')[0];
                if (field == "value")
                    selector.setValue(getValues(data, arrReturnParam[i].split(':')[1]));
                else if (field == "text")
                    selector.setText(getValues(data, arrReturnParam[i].split(':')[1]));
            }
        }

        //处理returnParams
        var params = settings.returnParams.split(',');
        var alreadyField = {}; //已经赋值Value的字段
        for (var i = 0; i < params.length; i++) {
            var field = params[i].split(':')[0];
            var relateField = params[i].split(':')[1];

            if (field == "value" || field == "text" || $.trim(field) == "")
                continue;

            var item = mini.getbyName(field);
            if (item == undefined) {
                msgUI(settings.key + "控件的returnParams配置错误！无法找到控件：" + field, 4);
                return;
            }
            if (alreadyField[field] == true) //已经SetValue，则SetText
                item.setText(getValues(data, relateField));
            else
                item.setValue(getValues(data, relateField));
            alreadyField[field] = true;
        }

        //触发控件的onUserSelectChanged
        if (typeof (settings.onUserSelectChanged) != "undefined")
            settings.onUserSelectChanged(selector);
        //触发valueChanged
        if (selector.doValueChanged) {
            selector.doValueChanged();
        }
        if (selector.validate) {
            selector.validate();
        }
    }
}
function addMultiUserSelectorByRole(name, selectorSettings) {
    selectorSettings = $.extend({ width: 450, height: 450, selectMode: "single", targetType: "form", allowResize: false }, selectorSettings);
    if (selectorSettings.targetType == "form") {
        selectorSettings.returnParams = "value:ID,text:Name," + $.trim(selectorSettings.returnParams);
        addAutoUserSelect(name, selectorSettings);
    }
    var url = urlConstant.multiUser;
    if (selectorSettings.OrgIDs || selectorSettings.RoleIDs)
        url = urlConstant.multiScopeUser;
    if (selectorSettings.OrgIDs)
        url = url + "&OrgIDs=" + selectorSettings.OrgIDs;
    if (selectorSettings.RoleIDs)
        url = url + "&RoleIDs=" + selectorSettings.RoleIDs;
    //alert(url);
    url = "/Market/Flow/Selector/ChooseRoleToUser?rolekey=TheOffice,HrUsers,PlanUser,InformationUser,XXGLB,ChiefEngineersUser,QualityUser,PartyUser,JianChaUser,SupervisionUser,XinZhengUser,FinanceUser,LawUser,LaborUser,SafetyUser,ZHBZZX,GJB,CGUser";
    addSelector(name, url, selectorSettings);
}



function codeChanged() {
    var fieldCode = "";
    var contractCode = "";
    var indexCode = "";
    var field = mini.getbyName("ContractField").getValue();
    switch (field) {
        case "GDZC":
            fieldCode = "ZC";
            break;
        case "Soft":
            fieldCode = "RJ";
            break;
        case "ZXZX":
            fieldCode = "ZX";
            break;
        case "KJ":
            fieldCode = "KJ";
            break;
        case "HZ":
            fieldCode = "HZ";
            break;
        case "ZH":
            fieldCode = "ZH";
            break;
        case "KCSJ":
            fieldCode = "KC";
            break;
        case "EPC":
        case "GJGS":
        case "ZB":
            fieldCode = "ZB";
            break;
        case "JJ":
            fieldCode = "JJ";
            break;
        case "ZGS":
            fieldCode = "ZGS";
            break;
        case "BM":
            fieldCode = "BM";
            break;
        default:
            fieldCode = "";
            break;
    }

    var year = mini.getbyName("Year").getValue();
    var areaCode = mini.getbyName("AreaCode").getValue();
    var contractType = mini.getbyName("ContractType").getValue();
    var deptCode = mini.getbyName("DeptCode").getValue();

    if (contractType == "NormalInner") { contractCode = 1; }
    else if (contractType == "NormalOuter") { contractCode = 2; }
    else {
        contractCode = 2;
    }
    var projectCode = "";
    addExecuteParam("ProjectCode", projectCode);
    addExecuteParam("Year", year);
    addExecuteParam("DeptCode", deptCode);
    execute("/Market/Flow/ContractReview/GetCode", {
        validateForm: false, onComplete: function (data) {
            mini.getbyName("IndexCode").setValue(data["IndexCode"]);
            mini.getbyName("IndexIntCode").setValue(data["IndexIntCode"]);
            indexCode = data["IndexCode"];

            if (projectCode != "")
                mini.getbyName("Code").setValue(fieldCode + "-" + year + "-" + areaCode + "-" + contractCode + "-" + deptCode + "-" + projectCode + "-" + indexCode);
            else
                mini.getbyName("Code").setValue(fieldCode + "-" + year + "-" + areaCode + "-" + contractCode + "-" + deptCode + "-" + indexCode);
        }
    });

}

function SetIsHide() {
    var contractField = getQueryString("Field");
    if (contractField == "") {
        contractField = mini.getbyName("ContractField").getValue();
    }
    var deptType = mini.getbyName("DeptType").getValue();

    //审批人员的隐藏于显示
    var Imp = mini.getbyName("ImportantDegree").getValue();
    if (Imp == "") Imp = "1";
    $(".IsHideLeader").hide();
    mini.getbyName("CEO").required = false;
    $(".zflgwHide").show();
    $(".IsFgld").show();
    $(".zflgwHtml").html("总法律顾问");
    $(".ceoHtml").html("公司领导");

    var zflobj = $(".zflgwHide");
    var fgldobj = $(".IsFgld");
    $(".IsFuck").prepend(zflobj[1]);
    $(".IsFuck").prepend(zflobj[0]);
    if (Imp == "2") {
        // fgldobj[1].after($(".IsHide")[0])
        $(".IsFuck").prepend(fgldobj[1]);
        $(".IsFuck").prepend(fgldobj[0]);
    }
    
    var FzsType = "";
    if (Imp == "4") {
        FzsType = "KCSJ_FZS";
    }
    else {
        FzsType = "ZNL_FZS";
    }
    $.ajax({
        url: "/Market/Flow/ContractReview/GetFzsOrZflgwUser",
        data: { type: FzsType },
        type: "post",
        success: function (data) {
            if (data.Result == "1") {
                var obj = mini.getbyName("ChiefUser");
                if (obj.getValue() == "") {
                    obj.setText(data.UserName);
                    obj.setValue(data.UserID);
                }
            }
        }
    });
    switch (Imp) {
        case "1":
            if (contractField == "ZXZX" && deptType == "ZN") {
                $(".IsHideLeader").hide();
            }
            if (contractField == "ZXZX" && deptType == "YW") {
                $(".zflgwHide").hide();
            }
            if (contractField == "Soft" || contractField == "KJ") {
                $(".zflgwHide").hide();
            }
            if (contractField == "GDZC" || contractField == "JJ") {
                $(".zflgwHide").show();
            }
            if (contractField == "ZH" && deptType == "ZN") {
                $(".IsHideLeader").hide();
            }
            if (contractField == "ZH" && deptType == "YW") {
                $(".zflgwHide").hide();
                $(".IsHideLeader").hide();
            }
            if (contractField == "HZ" && deptType == "YW") {
                $(".zflgwHide").hide();
                $(".IsHideLeader").hide();
            }
            if (contractField == "HZ" && deptType == "ZN") {
                $(".ceoHtml").html("董事长");
                $(".IsHideLeader").show();
                mini.getbyName("CEO").required = true;
                $.ajax({
                    url: "/Market/Flow/ContractReview/GetFzsOrZflgwUser",
                    data: { type: "CEO" },
                    type: "post",
                    success: function (data) {
                        if (data.Result == "1") {
                            var obj = mini.getbyName("CEO");
                            if (obj.getValue() == "") {
                                obj.setText(data.UserName);
                                obj.setValue(data.UserID);
                            }
                        }
                    }
                });
            }
            break;
        case "2":
            $(".IsHideLeader").show();
            mini.getbyName("CEO").required = true;
            $(".ceoHtml").html("总经理");
            if (FlowCurrentStepCode.indexOf("Start") != -1) {
                if (mini.getbyName("IsReject").getValue() != "T") {
                    $.ajax({
                        url: "/Market/Flow/ContractReview/GetFzsOrZflgwUser",
                        data: { type: "ZJL" },
                        type: "post",
                        success: function (data) {
                            if (data.Result == "1") {
                                var obj = mini.getbyName("CEO");
                                if (obj.getValue() == "") {
                                    obj.setText(data.UserName);
                                    obj.setValue(data.UserID);
                                }
                            }
                        }
                    });
                }
            }
            break;
        case "3":
            $(".IsHideLeader").hide();
            break;
        case "4":
            $(".zflgwHtml").html("副总师");
            $(".IsHideLeader").hide();
            break;
    }
    var Code = mini.getbyName("DeptCode").getValue();
    if ((contractField == "ZXZX" && deptType == "ZN") || (contractField == "HZ" && deptType == "ZN")) {
        if (Code == "3100" || Code == "3700" || Code == "2500") {
            $(".IsFgld").hide();
        }
    }
}


function ContractReviewInfo() {
    var Code = mini.getbyName("Code").getValue();
    var ProjectCode = mini.getbyName("ProjectCode").getValue();
    openWindow("/Market/Flow/ContractReview/RelateList?Code=" + Code + "&ProjectCode=" + escape(ProjectCode), { title: "查看合同详细信息", gridId: "dataGrid", funcType: 'view', width: 1000, height: 650 });
}
function ReviewFileInfo() {
    var id = mini.getbyName("ID").getValue();
    openWindow("/Market/Flow/ContractReview/ReviewFileList?MainID=" + id, { title: "查看审批附件信息", gridId: "dataGrid", funcType: 'view', width: 800, height: 500 });
}
function FileVersionInfo() {
    var id = mini.getbyName("ID").getValue();
    openWindow("/Market/Flow/ContractReview/FileVersionList?MainID=" + id, { title: "查看修订附件信息", gridId: "dataGrid", funcType: 'view', width: 800, height: 500 });
}


function onGDZCContractIDEdit(e) {
    openWindow("/Market/Flow/Selector/ChooseGDZCContract",
        {
            width: 800, height: '600', onDestroy:
                function AfterSelected(data, settings) {

                    if (data == undefined || typeof (data) != "object" || typeof (data) == "undefined")
                        return;


                    //var sender = e.sender;
                    if (data.length > 0) {

                        mini.getbyName("Contract").setValue(data[0].ID);
                        mini.getbyName("ContractID").setValue(data[0].ID);
                        mini.getbyName("Contract").setText(data[0].ContractName);
                        mini.getbyName("Contract").validate();
                        addExecuteParam("Data", data);

                        execute('/Market/Flow/ContractReview/choosegdzc', {
                            async: false, validateForm: false, onComplete: function (e) {
                                if (e != null) {


                                    mini.getbyName("ContractID").setValue(e.ContractID);
                                    mini.getbyName("Contract").setValue(e.ContractID);
                                    mini.getbyName("Contract").setText(e.ContractName);
                                    mini.getbyName("ContractCode").setValue(e.ContractCode);
                                    mini.getbyName("ContractValue").setValue(e.ContractValue);

                                    mini.getbyName("ContractType").setValue(e.ContractType);
                                    mini.getbyName("FilePath").setValue(e.FilePath);
                                    mini.getbyName("IsStandard").setValue(e.IsStandard);
                                    mini.getbyName("Discription").setValue(e.Discription);
                                    mini.getbyName("Attachment").setValue(e.Attachment);
                                    mini.getbyName("Remark").setValue(e.Remark);
                                    mini.getbyName("CreatorRelateWay").setValue(e.CreatorRelateWay);



                                }
                                else {
                                    mini.getbyName("ContractID").setValue("");
                                    mini.getbyName("Contract").setValue("");
                                    mini.getbyName("Contract").setText("");
                                }
                            }
                        });

                    }
                }
        });
}


function SynGDZCFile() {

    var contractID = mini.getbyName("Contract").getValue();
    var relateID = mini.getbyName("ID").getValue();
    if (contractID == "") { alert("请先选择合同！"); return; }

    addExecuteParam("ContractID", contractID);
    addExecuteParam("RelateId", relateID);


    execute('/Market/Flow/ContractReview/syngdzcfile', {
        async: false, validateForm: false, onComplete: function (e) {

            if (e != null) {


                var filepath = e.Attachment;
                mini.getbyName("Attachment").setValue(filepath);
                alert("同步成功！");

            }

        }
    });
}