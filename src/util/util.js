/**
 * Created by JIANBO on 2016/11/18.
 */

//工具方法-获得一个范围内的随机数
export function getRangeRandom(low,high){
  return Math.ceil(Math.random()*(high-low)+low);
}
//工具方法-获得0-30范围内的随机数
export function get30DegRandom(){
  return (Math.random()>0.5?'':'-')+Math.ceil(Math.random()*30);
}

