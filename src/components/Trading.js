import React ,{ Component } from 'react';
import EN from '../translator/translation.en';

class Trading extends Component {
    constructor(props){
        super(props);
        this.state ={


        }


    }
    componentWillMount(){
        // $('tactics_way').children('li').mouseover(
        //     function () {
        //         $(this).animate({padding:'30px 0',border:'5px solid #F9F9F9'},500)
        //     }
        // )
    }
    render(){
        let  fontSize,
            fontSize1,
            fontSize2,
             fontSize3,
            fontSize4,
            marginTop,
            width,
            marginTop1,
            marginBot;

        const Lang = this.props.LANG;
        switch (Lang){
            case EN:
             fontSize = 16;
             fontSize1= 14;
             fontSize2=24;
             fontSize3 =10;
                fontSize4=12;
                marginTop=35;
                width = 510;
                marginTop1= 16;
                marginBot=-3;
                break;
            default:


        }
        return(
            <div className="trade">
                <div className="trade_header_pic">
                    <div className="trade_header_bg">
                        <p>{Lang.TRADINGCONTENT.PARTFIVE.CONTEXT_ONE}</p>
                        <p style={{marginTop:marginTop1}}>{Lang.TRADINGCONTENT.PARTFIVE.CONTEXT_TWO}</p>
                    </div>

                </div>

                <div className="technology">

                    <div className="w1220 w1220-Center">
                        <div className="map">
                        <div className="place">

                        </div>

                        <div className="gift">
                            <p className="p1" style={{fontSize:fontSize}}><b>{Lang.TRADINGCONTENT.PARTONE.CONTEXT_ONE}</b></p>
                            <div className="gift1">
                            <p className="p2" style={{fontSize:fontSize1}}>{Lang.TRADINGCONTENT.PARTONE.CONTEXT_TWO}</p>
                            {/*<p className="p3" style={{fontSize:fontSize1}}>{Lang.TRADINGCONTENT.PARTONE.CONTEXT_THREE}</p>*/}
                            </div>
                        </div>
                        </div>
                        <div className="combination">
                            <div className="invest">
                                <p><b style={{fontSize:fontSize2}}>{Lang.TRADINGCONTENT.PARTTWO.TITLE}</b></p>
                                <p className="p4" style={{fontSize:fontSize}}>{Lang.TRADINGCONTENT.PARTTWO.CONTEXT_ONE}</p>
                            </div>
                        </div>

                        <div className="about_line">
                            <div className="about_line1">
                                {/*<img src="./src/images/index/line1.png" alt=""/>*/}
                            </div>
                        </div>

                        <div className="tactics">
                            <p style={{fontSize:fontSize2}}><b>{Lang.TRADINGCONTENT.PARTTHREE.TITLE}</b></p>
                            <p className="p1" style={{fontSize:fontSize}}>{Lang.TRADINGCONTENT.PARTTHREE.CONTEXT_ONE}</p>
                            <p className="p2" style={{fontSize:fontSize}}>{Lang.TRADINGCONTENT.PARTTHREE.CONTEXT_TWO}</p>

                            <ul className="tactics_way ">
                                <li className="trade_center1">

                                    <img src="./src/images/trade/s1.png"/>
                                    <p style={{fontSize:fontSize1}}><b>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_ONE.TITLE}</b></p>
                                    <p style={{fontSize:fontSize4,marginBottom:marginBot}}>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_ONE.CONTEXT_ONE}</p>
                                    <p style={{fontSize:fontSize4}}>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_ONE.CONTEXT_TWO}</p>
                                    <p style={{fontSize:fontSize4}}>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_ONE.CONTEXT_THREE}</p>
                                    <p style={{fontSize:fontSize4}}>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_ONE.CONTEXT_FOUR}</p>

                                </li>
                                <li className="trade_center2">

                                    <img src="./src/images/trade/s2.png"/>
                                    <p style={{fontSize:fontSize1}}><b>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_TWO.TITLE}</b></p>
                                    <p style={{fontSize:fontSize4,marginBottom:marginBot}}>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_TWO.CONTEXT_ONE}</p>
                                    <p style={{fontSize:fontSize4}}>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_TWO.CONTEXT_TWO}</p>
                                    <p style={{fontSize:fontSize4}}>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_TWO.CONTEXT_THREE}</p>
                                    <p style={{fontSize:fontSize4}}>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_TWO.CONTEXT_FOUR}</p>

                                </li>
                                <li className="trade_center3">

                                    <img src="./src/images/trade/s3.png"/>
                                    <p style={{fontSize:fontSize1}}><b>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_THREE.TITLE}</b></p>
                                    <p style={{fontSize:fontSize4,marginBottom:marginBot}}>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_THREE.CONTEXT_ONE}</p>
                                    <p style={{fontSize:fontSize4}}>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_THREE.CONTEXT_TWO}</p>
                                    <p style={{fontSize:fontSize4}}>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_THREE.CONTEXT_THREE}</p>
                                    <p style={{fontSize:fontSize4}}>{Lang.TRADINGCONTENT.PARTTHREE.APPENDIX_THREE.CONTEXT_FOUR}</p>

                                </li>
                            </ul>

                        </div>
                        <div className="about_line">
                            <div className="about_line1">
                                {/*<img src="./src/images/index/line1.png" alt=""/>*/}
                            </div>
                        </div>
                        <div className="zend_logo">
                            <img src="./src/images/trade/xlogo.png" />
                            <p>{Lang.TRADINGCONTENT.PARTFOUR.TITLE} <span className="Tm" style={{fontSize:12}}>{Lang.TRADINGCONTENT.PARTFOUR.TITLE1}</span> </p>
                            <div className="zend_logo1">
                            <p style={{fontSize:fontSize1}}>{Lang.TRADINGCONTENT.PARTFOUR.CONTEXT_ONE}</p>
                            <p style={{fontSize:fontSize1}}>{Lang.TRADINGCONTENT.PARTFOUR.CONTEXT_TWO}</p>
                            <p style={{fontSize:fontSize1}}>{Lang.TRADINGCONTENT.PARTFOUR.CONTEXT_THREE}</p>
                            </div>
                            <p style={{fontSize:fontSize4,marginTop:marginTop,width:width}}>{Lang.TRADINGCONTENT.PARTFOUR.CONTEXT_FOUR}</p>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
export default Trading