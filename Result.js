function result(){
   var students={
    DAVID:{
        math:"97",
        physics:"78",
        English:"40"

    },
    DIWAKAR:{
        math:"100",
        physics:"98",
        English:"80"

    },
    KAVYA:{
        math:"99",
        physics:"68",
        English:"30"

    },
    ARUN:{
        math:"97",
        physics:"78",
        English:"40"

    },
    NAVYA:{
        math:"70",
        physics:"76",
        English:"67"

    }
   }
   var studentName=document.getElementById('studentname').value;
    var inputname=studentName.toUpperCase();
    var definition=students[inputname];
    var output=document.getElementById("output");
    if(definition==undefined)
    {
        output.innerHTML=`<hr>There is no Information about the student.<hr>`;
    }
    else{
        output.innerHTML=`<hr> Math Score:${definition.math}<hr> Physics score:${definition.physics}<hr>English score:${definition.English}`;
    }
    

};