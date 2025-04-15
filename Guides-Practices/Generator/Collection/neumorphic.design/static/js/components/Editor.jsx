
import React, { Component } from 'react';
import './Editor.css';
import $ from 'jquery'; 
import ToggleButton from 'react-toggle-button';
import { X, Check } from './Icons'
import {isMobile} from 'react-device-detect';
var convert = require('color-convert');
var tinycolor = require("tinycolor2");

class Editor extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  	page1: false,
  	page2: true,
    size: 75,
    shadowSize: 30,
    borderRadius: 100,
    elevation: 33,
    blur: 15,
    intensity: 18,
    copy1: false,
    copy2: false, 
    copy3: false,
    copy4: false,
    toolTip: "\u00A0",
    color: '#EEF0F4',
    lightShadow: '',
    darkShadow: '',
    textColor: '#8B8FA5',
    colorInputValue: 'EEF0F4',
    textColorInputValue: '8B8FA5',
    textAreaValue: "Write Stuff!",
    staticContainerShadow: "",
    staticTooltipShadow: "",
    staticCopyShadow: "",
    staticButtonShadow: "",
    staticButtonBackground: "",
    inset: true,
    concave: false,
    concavity: 50,
    boxShadow: "inset 7px 7px 14px #d4d6d9, inset -7px -7px 14px #ffffff",
    linearGradient: ""
  }
}

lightenDarkenColor = (col, amt) => {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
    var b = ((num >> 8) & 0x00FF) + amt;
    var g = (num & 0x0000FF) + amt;
    if (r > 255) r = 255;
    if (g > 255) g = 255;
    if (b > 255) b = 255;
    if  (r < 0) r = 0;
    if (g < 0) g = 0;
    if  (b < 0) b = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}

calculateLightShadow = (color, intensity) => {
var newIntensity = intensity / 200;
var hexColor = convert.hex.rgb(color);
console.log("printing color");
console.log(color);
console.log(hexColor);
hexColor[0] = hexColor[0] + (hexColor[0] * newIntensity);
hexColor[1] = hexColor[1] + (hexColor[1] * newIntensity);
hexColor[2] = hexColor[2] + (hexColor[2] * newIntensity);
console.log(hexColor);
if (hexColor[0] < 0) {
  hexColor[0] = 0;
}
if (hexColor[1] < 0) {
  hexColor[1] = 0;
}
if (hexColor[2] < 0) {
  hexColor[2] = 0;
}


if (hexColor[0] > 255) {
  hexColor[0] = 255;
}
if (hexColor[1] > 255) {
  hexColor[1] = 255;
}
if (hexColor[2] > 255) {
  hexColor[2] = 255;
}
console.log(convert.rgb.hex(hexColor));

return convert.rgb.hex(hexColor);
}

calculateDarkShadow = (color, intensity) => {
var newIntensity = intensity / 200;
var hexColor = convert.hex.rgb(color);
console.log("printing color");
console.log(color);
console.log(hexColor);


hexColor[0] = hexColor[0] - (hexColor[0] * newIntensity);
hexColor[1] = hexColor[1] - (hexColor[1] * newIntensity);
hexColor[2] = hexColor[2] - (hexColor[2] * newIntensity);
console.log(hexColor);
if (hexColor[0] < 0) {
  hexColor[0] = 0;
}
if (hexColor[1] < 0) {
  hexColor[1] = 0;
}
if (hexColor[2] < 0) {
  hexColor[2] = 0;
}


if (hexColor[0] > 255) {
  hexColor[0] = 255;
}
if (hexColor[1] > 255) {
  hexColor[1] = 255;
}
if (hexColor[2] > 255) {
  hexColor[2] = 255;
}
console.log(convert.rgb.hex(hexColor));
return convert.rgb.hex(hexColor);
}

 calculateAccentColor = (color, intensity) => {
var hexColor = convert.hex.rgb(color);
var colorAverage = (hexColor[0] + hexColor[1] + hexColor[2]) / 3;
console.log(colorAverage);
var diff = Math.abs(127.5 - Math.abs(colorAverage));
var shadeIntensity = intensity + (diff * 0.20);
if (colorAverage >= 127.5) {
shadeIntensity = shadeIntensity * -1;
} 

  return this.lightenDarkenColor(color, shadeIntensity);

 }

 handleChange1 = (event) => {
  //Size

  this.setState({
    size: event.target.value
      });
}

 handleChange2 = (event) => {
  //Corner Radius
  this.setState({borderRadius: event.target.value});
}

 handleChange3 = (event) => {
  var pc = event.target.value;
  //Elevation
  this.setState({
    elevation: pc
  }, () => {
    this.transformExample();
});
}

 handleChange4 = (event) => {
  //Blur
  this.setState({blur: event.target.value}, () => {
    this.transformExample();
});
}

 handleChange5 = (event) => {
  //Intensity
  this.setState({intensity: event.target.value}, () => {
    this.transformExample();
});
}

 handleChange6 = (event) => {
  //concavity
  var cBool;
  if (event.target.value == 50) {
    cBool = false;
  } else {
    cBool = true;
  }
  this.setState({concavity: event.target.value, concave: cBool}, () => {
    this.transformExample();
});
}

 handlePickerChange = (event) => {
    var newColor = event.target.value;
    if (newColor[0] != '#') {
      newColor = '#' + newColor;
    }
  var shadowSize =  Math.round((this.state.elevation / 3.33 + Number.EPSILON) * 100) / 100;
  var sizeString = shadowSize + "px";
  var blurString = this.state.blur + "px";
  var intensity = this.state.intensity;
  var lightShadow = this.calculateLightShadow(newColor, intensity);
  var darkShadow = this.calculateDarkShadow(newColor, intensity);
  var textColor = this.calculateAccentColor(newColor, 50);
  let root = document.documentElement;
  root.style.setProperty('--accent-color', textColor);
  root.style.setProperty('--main-bg-color', newColor);
  var textColorInputVal = newColor.substr(1);
  var inset = this.state.inset;


  if (inset) {
  var newBoxShadow = "inset " + sizeString + " " + sizeString + " " + blurString + " " + "#" + darkShadow + ", inset -" + sizeString + " -" + sizeString + " " + blurString + " " + "#" + lightShadow;
} else {
var newBoxShadow = sizeString + " " + sizeString + " " + blurString + " " + "#" + darkShadow + ", -" + sizeString + " -" + sizeString + " " + blurString + " " + "#" + lightShadow;
}

var conLight;
var conDark;
if (this.state.concave) {
conLight = this.getConvexLightShadow(newColor, this.state.concavity);
conDark = this.getConvexDarkShadow(newColor, this.state.concavity);
}
var linGrad;
if (this.state.concavity == 50 || this.state.concave) {
linGrad = "";
} else if (this.state.concavity < 50) {
linGrad = "linear-gradient(145deg, #" + conLight + ", #" + conDark + ")";

} else {
linGrad = "linear-gradient(145deg, #" + conDark + ", #" + conLight + ")";

}


this.setState({
  color: newColor,
  lightShadow: lightShadow,
  darkShadow: darkShadow,
  boxShadow: newBoxShadow,
  textColor: textColor,
  colorInputValue: textColorInputVal,
  linearGradient: linGrad

});

}

handleColorTextInputChange = (event) => {
  //Color
  console.log("Getting value of color text input");
  console.log(event.target.value);
  var colorHexVal = event.target.value;
  
  if (colorHexVal.length == 6) {
  var newColor = "#" + colorHexVal;
  var shadowSize =  Math.round((this.state.elevation / 3.33 + Number.EPSILON) * 100) / 100;
  var sizeString = shadowSize + "px";
  var blurString = this.state.blur + "px";
  var intensity = this.state.intensity;
  var lightShadow = this.calculateLightShadow(newColor, intensity);
  var darkShadow = this.calculateDarkShadow(newColor, intensity);
  var textColor = this.calculateAccentColor(newColor, 50);
  let root = document.documentElement;
  root.style.setProperty('--accent-color', textColor);
  root.style.setProperty('--main-bg-color', newColor);

  var inset = this.state.inset;

  if (inset) {
  var newBoxShadow = "inset " + sizeString + " " + sizeString + " " + blurString + " " + "#" + darkShadow + ", inset -" + sizeString + " -" + sizeString + " " + blurString + " " + "#" + lightShadow;
} else {
var newBoxShadow = sizeString + " " + sizeString + " " + blurString + " " + "#" + darkShadow + ", -" + sizeString + " -" + sizeString + " " + blurString + " " + "#" + lightShadow;
}

var conLight;
var conDark;
if (this.state.concave) {
conLight = this.getConvexLightShadow(newColor, this.state.concavity);
conDark = this.getConvexDarkShadow(newColor, this.state.concavity);
}
var linGrad;

if (this.state.concavity == 50) {
linGrad = "";
} else if (this.state.concavity < 50) {
linGrad = "linear-gradient(145deg, #" + conLight + ", #" + conDark + ")";

} else {
linGrad = "linear-gradient(145deg, #" + conDark + ", #" + conLight + ")";

}


this.setState({
  color: newColor,
  lightShadow: lightShadow,
  darkShadow: darkShadow,
  boxShadow: newBoxShadow,
  textColor: textColor,
  colorInputValue: colorHexVal,
  linearGradient: linGrad

});
  } else {
    this.setState({
    colorInputValue: colorHexVal
  });
  }
  
}

writeText = (str) => {
  return new Promise(function(resolve, reject) {
    var success = false;
    function listener(e) {
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
      success = true;
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
    success ? resolve(): reject();
  });
};

 writeToClipboard = (event) => {
  console.log("copying to clipboard")
  var contents;
  var gradCopy;
  if (this.state.concave == false) {
    gradCopy = this.state.color;
  } else {
    gradCopy = this.state.linearGradient;
  }
  switch (event.currentTarget.getAttribute("id")) {
    case "copyText1":
    //All
      contents = "background: " + gradCopy + ";" + '\n' + "border-radius: " + this.state.borderRadius + "%;" + '\n' + "box-shadow: " + this.state.boxShadow + ";";
    break;
    case "copyText2":
    //Background
      contents = "background: " + gradCopy + ";";
      break;
    case "copyText3":
    //Border Radius
      contents = "border-radius: " + this.state.borderRadius + "%;";
      break;
    case "copyText4":
    //Box Shadow
      contents = "box-shadow: " + this.state.boxShadow + ";";
      break;
    default:
      contents = "\u00A0";

  }

  console.log("writing this to the function");
  console.log(contents);
  this.writeText(contents);

  

}

removeCopyIcon = (event) => {
  this.setState({
    copy1: false,
    copy2: false,
    copy3: false,
    copy4: false
  })
}

emptyTooltip = (event) => {
      this.setState({
    toolTip: "\u00A0",
    copy1: false,
    copy2: false,
    copy3: false,
    copy4: false
  })
}

prevPage = (event) => {

  if (this.state.page1) {
    this.setState({
      page1: false,
      page2: true
    })
  } else {
    this.setState({
      page2: false,
      page1: true
    })
  }

}

nextPage = (event) => {
  
  if (this.state.page1) {
    this.setState({
      page1: false,
      page2: true
    })
  } else {
    this.setState({
      page2: false,
      page1: true
    })
  }

}

getConvexLightShadow = (color, intensity) => {
  var obtrudeConvexLightShadow = this.calculateLightShadow(color, intensity / 2);
  if (intensity <= 50) {
     obtrudeConvexLightShadow = this.calculateLightShadow(color, 50 - intensity / 2);
  } else {
    obtrudeConvexLightShadow = this.calculateLightShadow(color, intensity / 2);
  }
  
return obtrudeConvexLightShadow;
}

getConvexDarkShadow = (color, intensity) => {
    var obtrudeConvexDarkShadow = this.calculateDarkShadow(color, intensity / 2);
  if (intensity <= 50) {
     obtrudeConvexDarkShadow = this.calculateDarkShadow(color, 50 - intensity / 2);
  } else {
    obtrudeConvexDarkShadow = this.calculateDarkShadow(color, intensity / 2);
  }
  return obtrudeConvexDarkShadow;
}

changeColor = (event) => {
  var newColor = event.currentTarget.getAttribute("data-color");
  var shadowSize =  Math.round((this.state.elevation / 3.33 + Number.EPSILON) * 100) / 100;
  var sizeString = shadowSize + "px";
  var blurString = this.state.blur + "px";
  var intensity = this.state.intensity;
  var lightShadow = this.calculateLightShadow(newColor, intensity);
  var darkShadow = this.calculateDarkShadow(newColor, intensity);
  var textColor = this.calculateAccentColor(newColor, 50);
  let root = document.documentElement;
  root.style.setProperty('--accent-color', textColor);
  root.style.setProperty('--main-bg-color', newColor);
  let textColorInputVal = newColor.substr(1);
  var inset = this.state.inset;

  if (inset) {
  var newBoxShadow = "inset " + sizeString + " " + sizeString + " " + blurString + " " + "#" + darkShadow + ", inset -" + sizeString + " -" + sizeString + " " + blurString + " " + "#" + lightShadow;
} else {
var newBoxShadow = sizeString + " " + sizeString + " " + blurString + " " + "#" + darkShadow + ", -" + sizeString + " -" + sizeString + " " + blurString + " " + "#" + lightShadow;
}

var conLight;
var conDark;
if (this.state.concave) {
conLight = this.getConvexLightShadow(newColor, this.state.concavity);
conDark = this.getConvexDarkShadow(newColor, this.state.concavity);
}
var linGrad;
if (this.state.concavity == 50) {
linGrad = "";
} else if (this.state.concavity < 50) {
linGrad = "linear-gradient(145deg, #" + conLight + ", #" + conDark + ")";

} else {
linGrad = "linear-gradient(145deg, #" + conDark + ", #" + conLight + ")";

}

this.setState({
  color: newColor,
  lightShadow: lightShadow,
  darkShadow: darkShadow,
  boxShadow: newBoxShadow,
  textColor: textColor,
  colorInputValue: textColorInputVal,
  linearGradient: linGrad

});
}

transformExample = () => {
  console.log("executing transformExample");
var shadowSize =  Math.round((this.state.elevation / 3.33 + Number.EPSILON) * 100) / 100;
var sizeString = shadowSize + "px";
var blurString = this.state.blur + "px";
var rgb = convert.hex.rgb(this.state.color);
  var lightShadow = this.calculateLightShadow(this.state.color, this.state.intensity);
  var darkShadow = this.calculateDarkShadow(this.state.color, this.state.intensity);
var shadow = this.state.intensity / 600;
var inset = this.state.inset;

var newBoxShadow;
if (inset) {
  var newBoxShadow = "inset " + sizeString + " " + sizeString + " " + blurString + " " + "#" + darkShadow + ", inset -" + sizeString + " -" + sizeString + " " + blurString + " " + "#" + lightShadow;
} else {
var newBoxShadow = sizeString + " " + sizeString + " " + blurString + " " + "#" + darkShadow + ", -" + sizeString + " -" + sizeString + " " + blurString + " " + "#" + lightShadow;
}

var conLight;
var conDark;
if (this.state.concave) {
conLight = this.getConvexLightShadow(this.state.color, this.state.concavity);
conDark = this.getConvexDarkShadow(this.state.color, this.state.concavity);
}
var linGrad;

if (this.state.concavity == 50) {
linGrad = "";
} else if (this.state.concavity < 50) {
linGrad = "linear-gradient(145deg, #" + conLight + ", #" + conDark + ")";

} else {
linGrad = "linear-gradient(145deg, #" + conDark + ", #" + conLight + ")";

}
console.log("Printing newbox and lingrad in transformExample");
console.log(newBoxShadow);
console.log(linGrad);
this.setState({
      boxShadow: newBoxShadow,
      linearGradient: linGrad
    })

}

changeShape = (event) => {
var option = event.currentTarget.getAttribute("id");
console.log("printing option");

console.log(option);
if (option == "shapePreset1" ) {
  console.log("option1 selected");

  this.setState({
    size: 50,
    borderRadius: 100,
    inset: true,
    concave: false,
    concavity: 50

  }, () => {
    this.transformExample();
});
} else if (option == "shapePreset2") {
  console.log("option2 selected");
  this.setState({
    size: 50,
    borderRadius: 100,
    inset: true,
    concave: true,
    concavity: 75
  }, () => {
    this.transformExample();
});
} else if (option == "shapePreset3") {
  console.log("option3 selected");
  this.setState({
    size: 50,
    borderRadius: 100,
    inset: false,
    concave: true,
    concavity: 25
  }, () => {
    this.transformExample();
});
} else if (option == "shapePreset4") {
  console.log("option4 selected");
  this.setState({
    size: 50,
    borderRadius: 100,
    inset: false,
    concave: true,
    concavity: 60
  }, () => {
    this.transformExample();
});
} else if (option == "shapePreset5") {
  console.log("option4 selected");
  this.setState({
    size: 50,
    borderRadius: 15,
    inset: true,
    concave: false,
    concavity: 50
  }, () => {
    this.transformExample();
});
} else if (option == "shapePreset6") {
  console.log("option4 selected");
  this.setState({
    size: 50,
    borderRadius: 15,
    inset: true,
    concave: true,
    concavity: 55
  }, () => {
    this.transformExample();
});
} else if (option == "shapePreset7") {
  console.log("option4 selected");
  this.setState({
    size: 50,
    borderRadius: 15,
    inset: false,
    concave: true,
    concavity: 30
  }, () => {
    this.transformExample();
});
} else {
  console.log("option4 selected");
  this.setState({
    size: 50,
    borderRadius: 15,
    inset: false,
    concave: true,
    concavity: 60
  }, () => {
    this.transformExample();
});
}

}

handleTextAreaChange = (event) => {
var text = event.target.value;
  this.setState({
    textAreaValue: text
  });
}

handleTextboxFocus = (event) => {
  event.target.select();
}

toggleInset = () => {
  console.log(this.state.inset);
  console.log(!this.state.inset);
this.setState({
  inset: !this.state.inset
}, () => {
this.transformExample();
});
}

toggleConcave = () => {
  if (this.state.concave) {
    this.setState({
  concave: !this.state.concave,
  concavity: 50
}, () => {
this.transformExample();
});
  } else {
    this.setState({
  concave: !this.state.concave,
  concavity: 25
}, () => {
this.transformExample();
});

  }
}

  render() {
    let actualBorderRadius = this.state.borderRadius / 2;
    let actualBorderRadiusString = actualBorderRadius + "%";
    let sizeString = (this.state.size * 5 + 50) + "px";
    const divStyle = {
      boxShadow: this.state.boxShadow,
      backgroundColor: this.state.color,
      borderRadius: actualBorderRadiusString,
      height: sizeString, 
      width: sizeString,
      background: this.state.linearGradient
    };

    let exampleDiv;

    exampleDiv = <div id="example" className="exampleContainer" style={divStyle} background={this.state.linearGradient}></div>;


  	let currentPage;

  	if (this.state.page2) {
  		currentPage = 
  		<div className="optionsContainer" style={{"backgroundColor": this.state.color, "boxShadow": this.state.boxShadow}}>
      <h1 className="subHeading">Presets</h1>
          
  				<section className="colorPresetContainer">
  					<div className="buttonNoText" id="colorPreset1" data-color="#EEF0F4" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset1" className="innerColor" onClick={this.changeColor} data-color="#EEF0F4" style={{"backgroundColor": "#EEF0F4"}}/></div>
  					<div className="buttonNoText" id="colorPreset2" data-color="#D2DBEE" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset2" className="innerColor" onClick={this.changeColor} data-color="#D2DBEE" style={{"backgroundColor": "#D2DBEE"}}/></div>
            <div className="buttonNoText" id="colorPreset8" data-color="#95A5A7" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset8" className="innerColor" onClick={this.changeColor} data-color="#95A5A7" style={{"backgroundColor": "#95A5A7"}}/></div>
  					<div className="buttonNoText" id="colorPreset3" data-color="#656565" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset3" className="innerColor" onClick={this.changeColor} data-color="#656565" style={{"backgroundColor": "#656565"}}/></div>
            <div className="buttonNoText" id="colorPreset7" data-color="#D65400" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset7" className="innerColor" onClick={this.changeColor} data-color="#D65400" style={{"backgroundColor": "#D65400"}}/></div>
            <div className="buttonNoText" id="colorPreset14" data-color="#e967ad" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset6" className="innerColor" onClick={this.changeColor} data-color="#e967ad" style={{"backgroundColor": "#e967ad"}}/></div>
            <div className="buttonNoText" id="colorPreset9" data-color="#FF9AA2" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset5" className="innerColor" onClick={this.changeColor} data-color="#FF9AA2" style={{"backgroundColor": "#FF9AA2"}}/></div>
            <div className="buttonNoText" id="colorPreset13" data-color="#d7b7d2" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset5" className="innerColor" onClick={this.changeColor} data-color="#d7b7d2" style={{"backgroundColor": "#d7b7d2"}}/></div>
            <div className="buttonNoText" id="colorPreset17" data-color="#b77110" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset5" className="innerColor" onClick={this.changeColor} data-color="#b77110" style={{"backgroundColor": "#b77110"}}/></div>
            <div className="buttonNoText" id="colorPreset20" data-color="#e9820c" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset8" className="innerColor" onClick={this.changeColor} data-color="#e9820c" style={{"backgroundColor": "#e9820c"}}/></div>
            <div className="buttonNoText" id="colorPreset18" data-color="#e19a60" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset6" className="innerColor" onClick={this.changeColor} data-color="#e19a60" style={{"backgroundColor": "#e19a60"}}/></div>
            <div className="buttonNoText" id="colorPreset19" data-color="#e9b367" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset7" className="innerColor" onClick={this.changeColor} data-color="#e9b367" style={{"backgroundColor": "#e9b367"}}/></div>
            <div className="buttonNoText" id="colorPreset17" data-color="#9c9d62" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset5" className="innerColor" onClick={this.changeColor} data-color="#9c9d62" style={{"backgroundColor": "#9c9d62"}}/></div>
            <div className="buttonNoText" id="colorPreset20" data-color="#eff95d" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset8" className="innerColor" onClick={this.changeColor} data-color="#eff95d" style={{"backgroundColor": "#eff95d"}}/></div>
            <div className="buttonNoText" id="colorPreset18" data-color="#e8eb47" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset6" className="innerColor" onClick={this.changeColor} data-color="#e8eb47" style={{"backgroundColor": "#e8eb47"}}/></div>
            <div className="buttonNoText" id="colorPreset19" data-color="#e7e384" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset7" className="innerColor" onClick={this.changeColor} data-color="#e7e384" style={{"backgroundColor": "#e7e384"}}/></div>
            <div className="buttonNoText" id="colorPreset11" data-color="#058f8c" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset7" className="innerColor" onClick={this.changeColor} data-color="#058f8c" style={{"backgroundColor": "#058f8c"}}/></div>        
            <div className="buttonNoText" id="colorPreset6" data-color="#1DAF5E" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset6" className="innerColor" onClick={this.changeColor} data-color="#1DAF5E" style={{"backgroundColor": "#1DAF5E"}}/></div>
            <div className="buttonNoText" id="colorPreset17" data-color="#89d28e" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset5" className="innerColor" onClick={this.changeColor} data-color="#89d28e" style={{"backgroundColor": "#89d28e"}}/></div>
            <div className="buttonNoText" id="colorPreset6" data-color="#67e1e9" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset6" className="innerColor" onClick={this.changeColor} data-color="#67e1e9" style={{"backgroundColor": "#67e1e9"}}/></div>
            <div className="buttonNoText" id="colorPreset4" data-color="#5665B9" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset4" className="innerColor" onClick={this.changeColor} data-color="#5665B9" style={{"backgroundColor": "#5665B9"}}/></div>
            <div className="buttonNoText" id="colorPreset16" data-color="#676ce9" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset8" className="innerColor" onClick={this.changeColor} data-color="#676ce9" style={{"backgroundColor": "#676ce9"}}/></div>
            <div className="buttonNoText" id="colorPreset15" data-color="#8a89d2" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset7" className="innerColor" onClick={this.changeColor} data-color="#8a89d2" style={{"backgroundColor": "#8a89d2"}}/></div>
            <div className="buttonNoText" id="colorPreset12" data-color="#C8CEEA" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset8" className="innerColor" onClick={this.changeColor} data-color="#C8CEEA" style={{"backgroundColor": "#C8CEEA"}}/></div>
            <div className="buttonNoText" id="colorPreset19" data-color="#6608c4" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset7" className="innerColor" onClick={this.changeColor} data-color="#6608c4" style={{"backgroundColor": "#6608c4"}}/></div>
            <div className="buttonNoText" id="colorPreset20" data-color="#d90de7" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset8" className="innerColor" onClick={this.changeColor} data-color="#d90de7" style={{"backgroundColor": "#d90de7"}}/></div>
            <div className="buttonNoText" id="colorPreset5" data-color="#9C56B9" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset5" className="innerColor" onClick={this.changeColor} data-color="#9C56B9" style={{"backgroundColor": "#9C56B9"}}/></div>
            <div className="buttonNoText" id="colorPreset18" data-color="#8367e9" style={{"backgroundColor": this.state.color}}><div id="innerColorPreset6" className="innerColor" onClick={this.changeColor} data-color="#8367e9" style={{"backgroundColor": "#8367e9"}}/></div>
            <div className="buttonNoText" id="shapePreset1" onClick={this.changeShape}><i className="fas fa-circle fa-2x"></i></div>
            <div className="buttonNoText" id="shapePreset2" onClick={this.changeShape}><i className="far fa-circle fa-2x"></i></div>
            <div className="buttonNoText" id="shapePreset3" onClick={this.changeShape}><i className="fas fa-circle fa-2x"></i></div>
            <div className="buttonNoText" id="shapePreset4" onClick={this.changeShape}><i className="far fa-circle fa-2x"></i></div>
            <div className="buttonNoText" id="shapePreset5" onClick={this.changeShape}><i className="fas fa-square fa-2x"></i></div>
            <div className="buttonNoText" id="shapePreset6" onClick={this.changeShape}><i className="far fa-square fa-2x"></i></div>
            <div className="buttonNoText" id="shapePreset7" onClick={this.changeShape}><i className="fas fa-square fa-2x"></i></div>
            <div className="buttonNoText" id="shapePreset8" onClick={this.changeShape}><i className="far fa-square fa-2x"></i></div>

          </section>
            <section className="nextContainer">
            <div className="button" onClick={this.prevPage} id="leftButton">Back</div>
            <div className="button" onClick={this.nextPage} id="rightButton">Next</div>

            </section>
  			</div>
  	} else {
  		currentPage = 
  		<div className="optionsContainer" style={{"backgroundColor": this.state.color, "boxShadow": this.state.boxShadow}}>
          <h1 className="subHeading"> Options </h1>
  				<section className="outerSliderContainer">
          <div className="sliderContainer">
  				<p className="sliderText">Size         :</p>
  				<input type="range" min="1" max="100" className="slider" id="idk1" onChange={this.handleChange1} value={this.state.size}></input>

          </div>
          <div className="sliderContainer">
  				<p className="sliderText">Corner Radius:</p>
  				<input type="range" min="1" max="100" className="slider" id="idk2" onChange={this.handleChange2} value={this.state.borderRadius}></input>
          </div>
          <div className="sliderContainer">
  				<p className="sliderText">Elevation     :</p>
  				<input type="range" min="1" max="100" className="slider" id="idk3" onChange={this.handleChange3} value={this.state.elevation}></input>
          </div>
          <div className="sliderContainer">
 				<p className="sliderText">Blur             :</p>
  				<input type="range" min="1" max="100" className="slider" id="idk4" onChange={this.handleChange4} value={this.state.blur}></input>
          </div>
          <div className="sliderContainer">
  				<p className="sliderText">Intensity       :</p>
  				<input type="range" min="1" max="100" className="slider" id="idk5" onChange={this.handleChange5} value={this.state.intensity}></input>
          </div>
          <div className="sliderContainer">
          <p className="sliderText">Concavity       :</p>
          <input type="range" min="1" max="100" className="slider" id="idk6" onChange={this.handleChange6} value={this.state.concavity}></input>
          </div>
  				</section>
            <section className="shapeContainer">
            <div className = "radioContainer">
            <ToggleButton inactiveLabel={<X/>} activeLabel={<Check/>} value={this.state.inset} onToggle={this.toggleInset} colors={{active: {base: '#3B89FD'}, inactive: {base: '#000000'}}}/>
            <label id="optionPicker1" className="radioText">Inset</label>
            </div>
            <div className = "radioContainer">
            <ToggleButton inactiveLabel={<X/>} activeLabel={<Check/>} value={this.state.concavity != 50} onToggle={this.toggleConcave} colors={{active: {base: '#3B89FD'}, inactive: {base: '#000000'}}}/>
            <label id="optionPicker2" className="radioText">Concave</label>
            </div>
            <div className="innerColorContainer">
            <input type="color" id="colorPicker" className="colorPicker" onChange={this.handlePickerChange} value={this.state.color}/>
            <input type="text" id="colorInput" className="colorInput" onChange={this.handleColorTextInputChange} onFocus={this.handleTextboxFocus} value={this.state.colorInputValue} maxLength="6"/>
            </div>
            </section>
          <section className="copyPasta" style={{"backgroundColor": this.state.color}}>
          <a className="copyText" onClick={this.writeToClipboard} id="copyText1" onMouseLeave={this.removeCopyIcon}>copy all <i id="copyText1" onClick={this.writeToClipboard} className="fas fa-copy" style={{"visibility": this.state.copy1 ? "visible" : "hidden" }}></i></a>
          <a className="copyText" onClick={this.writeToClipboard} id="copyText2" onMouseLeave={this.removeCopyIcon}>background <i id="copyText2" onClick={this.writeToClipboard} className="fas fa-copy" style={{"visibility": this.state.copy2 ? "visible" : "hidden" }}></i></a>
          <a className="copyText" onClick={this.writeToClipboard} id="copyText3" onMouseLeave={this.removeCopyIcon}>border-radius <i id="copyText3" onClick={this.writeToClipboard} className="fas fa-copy" style={{"visibility": this.state.copy3 ? "visible" : "hidden" }}></i></a>
          <a className="copyText" onClick={this.writeToClipboard} id="copyText4" onMouseLeave={this.removeCopyIcon}>box-shadow <i id="copyText4" onClick={this.writeToClipboard} className="fas fa-copy" style={{"visibility": this.state.copy4 ? "visible" : "hidden" }}></i></a>
          </section>
  				<section className="nextContainer">
            <div className="button" onClick={this.prevPage} id="leftButton" onMouseLeave={this.emptyTooltip}>Back</div>
            <div className="button" onClick={this.nextPage} id="rightButton" onMouseLeave={this.emptyTooltip}>Next</div>
            </section>
  			</div>
  	}
  return (
  	<div className="contentColumnSection" style={{"backgroundColor": this.state.color}}>
          <a className="ph" href="https://www.producthunt.com/posts/neumorphic-generator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-neumorphic-generator" target="_blank"><img className="ph" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=208119&theme=light" alt="Neumorphic Generator - Delightful CSS presets for your next product | Product Hunt Embed"/></a>
  		<div className="column">
  			{exampleDiv}
  		</div>
  		<div className="column">
  			{currentPage}

  		</div>
  	</div>
  );
}
}

export default Editor;
