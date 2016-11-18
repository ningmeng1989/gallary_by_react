/**
 * Created by JIANBO on 2016/11/18.
 */
//导入react库
import React from 'react';
// import ReactDOM from 'react-dom';

//创建单张图片组件
var ImgFigure=React.createClass({

  handleClick:function(e){

    if(this.props.arrange.isCenter){
      this.props.inverse();
    }else{
      this.props.center();
    }

    e.stopPropagation();
    e.preventDefault();
  },

  //render函数
  render:function(){

    var styleObj={};

    //如果prop属性中指定了这张图片的位置，则使用
    if(this.props.arrange.pos){
      styleObj=this.props.arrange.pos;
    }
    //如果图片的旋转角度有并且不为0，添加旋转角度
    if(this.props.arrange.rotate){
      (['mozTransform','msTransform','webkitTransform','transform']).forEach(function(value){
        styleObj[value]='rotate('+this.props.arrange.rotate+'deg)';
      }.bind(this));
    }

    if(this.props.arrange.isCenter){
      styleObj.zIndex=11;
    }

    var imgFigureClassName='img-figure';
    imgFigureClassName+=this.props.arrange.isInverse?' is-inverse':'';

    return (
      <figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
          <div className="img-back" onClick={this.handleClick}>
            <p>
              {this.props.data.description}
            </p>
          </div>
        </figcaption>
      </figure>
    )
  }
});

export default ImgFigure;
