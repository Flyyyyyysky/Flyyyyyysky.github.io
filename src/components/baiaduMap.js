import React, { Component } from 'react';
let  map,
     point,

     map1,
     point1,
    top_right_navigation,
     vectorMarker,
     vectorMarker1;
class BaiduMap extends Component{
    constructor(props){
        super(props);
        this.state={
            markers:
                ['103.854865,1.297357', '104.100728,30.683887']
        };


    }
    componentWillMount(){
        this.handleScriptLoad();
        this.handleScriptError();
    }
    componentDidMount(){

            map = new BMap.Map('allmap');
            point = new BMap.Point(103.854865,1.297357);
            map.centerAndZoom(point,18);
            map.enableScrollWheelZoom(true);
            vectorMarker = new BMap.Marker(new BMap.Point(103.854865,1.297357), {
                icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
                    scale: 1,
                    fillColor: "blue",
                    fillOpacity: 0.8
                })
            });
            map.addOverlay(vectorMarker);
            vectorMarker.setAnimation(BMAP_ANIMATION_BOUNCE);
            map.panBy(305,165);
            top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
            map.addControl(top_right_navigation)


            map1 = new BMap.Map('allmap1');
            point1 = new BMap.Point(104.100967,30.683903);
            map1.centerAndZoom(point1,17);
            map1.enableScrollWheelZoom(true);
            vectorMarker1 = new BMap.Marker(new BMap.Point(104.100967,30.683903), {

            icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
                scale: 1,
                fillColor: "blue",
                fillOpacity: 0.8
            })
            });
            map1.addOverlay(vectorMarker1);
            vectorMarker1.setAnimation(BMAP_ANIMATION_BOUNCE);
            map1.panBy(305,165);
            top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
            map1.addControl(top_right_navigation)
    }
    handleScriptLoad(){


    }
    handleScriptError(){

    }
    render(){
        let display = this.props.positionIndex===0?"block":"none";
        let display1 = this.props.positionIndex===0?"none":"block";
        let display2 = this.props.lange ? 'none':'block'
        return (
            <div style={{display:display2}}>

                <div id="allmap" style={{width:'100%',height:'240px',display:display}}></div>
                <div id="allmap1" style={{width:'100%',height:'240px',display:display1}}></div>
            </div>
        )
    }
}
export default  BaiduMap;