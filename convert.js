function to_ul(qtr){
    var i, li, ul = document.createElement("ul");
    ul.id = qtr.label;
    alert(ul.id);
    for(i = 1; i < qtr.list.length; i++){
        li = document.createElement("li");
        li.appendChild(document.createTextNode(qtr.list[i]));
        
        ul.appendChild(li);
    }

    return ul;
}

function to_table(years){
    var d, r, td, tr, th, table = document.createElement("table");
    for(r = 0; r < years.length; r++){
        tr = document.createElement("tr");
        for(d = 0; d < years[r].quarters.length; d++){
            td = document.createElement("td");
            td.appendChild(to_ul(years[r].quarters[d]));
            
            tr.appendChild(td);
        }
        
        table.appendChild(tr);
    }
    $("#hs, #101, #102, #103, #104, #201, #202, #203, #204, #301, #302, #303, #304, #401, #402, #403, #404, #501, #502, #503, #504").dragsort({ dragSelector: "li", dragBetween: true, dragEnd: saveOrder});

        
    document.body.appendChild(table);
    return table;
}
function saveOrder(){
      var serialStr = "";
      $("#101 li").each(function(i, elm) {serialStr += (i > 0 ? "|" : "") + $(elm).children().html(); })
      $("input[name=listSortOrder]").val(serialStr);
};