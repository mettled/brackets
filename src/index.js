module.exports = function check(str, bracketsConfig) {
 var tempstr = str;
  var lngStr = 0;
  var i = 0;
    for (i=0; ;i++){

        if (i<bracketsConfig.length){
          var conf = (bracketsConfig[i]);
          conf = conf.join(',').replace(',','');

        // alert((conf));
          var tempstr = tempstr.replace(conf,'');
        // alert(tempstr);
        }

        if (tempstr.length == 0 ){
          return true;
        } else if (i == 0 && lngStr == tempstr.length) {
          return false;
        }

        if (i == 0){
          lngStr = tempstr.length;
        } else if (i == bracketsConfig.length){
          i = -1;
        }


    }

}
