//合同确认
function DoConfirm() {
    var Grid = mini.get("dataGrid");
    var rows = Grid.getSelecteds();
    if (rows.length != 1)
        return msgUI("请选择一条总包合同记录下达！", 1);
    var row = rows[0];
    if (row["ContractConfirmState"] == "T")
        return msgUI("合同已确认，请重新选择！", 1);
    msgUI("确定要确认合同吗？", 2, function (result) {
        if (result != "ok") return;
        var url = "/Market/MarketUI/ContractManagement/PageView?TmplCode=ContractManagementEdit&functype=ContractConfirm&ID=" + row.ID;
        openWindow(url, {
            refresh: false, title: "合同确认信息", width: "70%", height: "80%",
            onDestroy: function () {
                Grid.reload();
            }
        });

    });
}
//取消合同确认
function DoCancelConfirm() {
    var Grid = mini.get("dataGrid");
    var rows = Grid.getSelecteds();
    if (rows.length != 1)
        return msgUI("请选择一条合同记录下达！", 1);
    var row = rows[0];
    if (row["Parent"])
        return msgUI("请选择一条合同记录下达！", 1);
    if (row["ContractConfirmState"] != "T")
        return msgUI("合同未确认，请重新选择！", 1);
    addExecuteParam("ContractInfoID", row.ID);
    execute("/Market/MarketUI/ContractManagement/CancelContractConfirm", {
        showLoading: true, refresh: false, onComplete: function (data) {
            msgUI("操作成功！");
            Grid.reload();
        }, validateForm: false
    });
}
