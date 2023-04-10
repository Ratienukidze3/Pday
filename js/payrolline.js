function setDivWidth(num) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    
    if (num === 1) {
      div1.style.flexBasis = "33%";
      div2.style.flexBasis = "calc((100% - 33%) / 2)";
      div3.style.flexBasis = "calc((100% - 33%) / 2)";
    } else if (num === 2) {
      div1.style.flexBasis = "66%";
      div2.style.flexBasis = "calc((100% - 66%) / 2)";
      div3.style.flexBasis = "calc((100% - 66%) / 2)";
    } else if (num === 3) {
      div1.style.flexBasis = "100%";
      div2.style.flexBasis = "0%";
      div3.style.flexBasis = "0%";
      div3.style.color = "red";
    }
  }
