const tableName = "tableBS";

const StartFunc = ({ inData, inColumnsArray }) => {
    jFLocalInitialize({ inData, inColumnsArray });
};

const jFLocalInitialize = ({ inData, inColumnsArray }) => {
    var $table = $(`#${tableName}`);

    $table.bootstrapTable("destroy").bootstrapTable({
        exportDataType: "all",
        exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'],
        data: inData,
        columns: inColumnsArray
    });
};

export { StartFunc };
