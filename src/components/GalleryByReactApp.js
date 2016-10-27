require('normalize.css/normalize.css');
//require('styles/App.css');
require('styles/main.scss');

import React from 'react';

// 获取图片相关的数据
var imagesDatas=require('../data/imageDatas.json');

//利用自执行函数，将图片名信息转为图片URL路径信息
imagesDatas=(function genImageURL(imageDatasArr){
  for(var i=0,j=imageDatasArr.length;i<j;i++){
    var singleImageData=imageDatasArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData.fileName);
    imageDatasArr[i]=singleImageData;
  }

  return imageDatasArr;
})(imagesDatas);

var GalleryByReactApp=React.createClass({
  render:function(){
    return(
      <section className="content">
        <section className="stage">
          <section className="img-sec">
          </section>
          <nav className="controller-nav">
          </nav>
        </section>
      </section>
    )
  }
});

GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;


//let yeomanImage = require('../images/yeoman.png');

//class AppComponent extends React.Component {
//  render() {
//    return (
//      <div className="index">
//        <img src={yeomanImage} alt="Yeoman Generator" />hehehe
//        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
//      </div>
//    );
//  }
//}

//AppComponent.defaultProps = {
//};
//
//export default AppComponent;
