import React ,{ Component } from 'react';
import EN from '../translator/translation.en';
import $ from 'jquery'
let  fontSize,
    fontSize1,
    fontSize2,
    fontSize3,
    fontSize4,
     lineHeight,
     marginTop,
    marginTop1,
        Width,
        marginBottom,
    lineHeight2;





class About extends React.Component {
    constructor(props){
        super(props);
        this.state ={
        aboutWidth:'',

        Lang:this.props.LANG,
        }


    }
    componentDidMount(){
        let swiper = new Swiper('.swiper-container', {
            pagination: '.pagination',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: false,
            autoplay: 3000,
            loop: true,
            useCSS3Transforms:true,
        });


    }


    render(){
        const Lang = this.props.LANG;

        switch (Lang){
            case EN:
                fontSize = 16;
                fontSize1= 14;
                fontSize2=24;
                fontSize3 =10;
                fontSize4=12;
                lineHeight=1.3;
                marginTop=9;
                Width = 660;
                marginTop1=16;
                marginBottom=150;
                    lineHeight2=1.5;

                break;
            default:
                marginTop=0;
                lineHeight=4.2;
                marginTop1=8;
                marginBottom =100;
                Width = 590;


        }
        return(
            <div className="about">
               <div className="about_header_pic">
                    <div className="about_header_bg">
                        <p>{Lang.ABOUTZENDOZH.PARTFOUR.CONTEXT_ONE}</p>
                        <p style={{marginTop:marginTop1}}>{Lang.ABOUTZENDOZH.PARTFOUR.CONTEXT_TWO}</p>
                    </div>
               </div>
                <div className="about_zendo">
                    <div className="w1220 w1220-Center">
                        <ul className="about_pic">
                            <li>
                                <img src="./src/images/about/zendo1.png"/>
                            </li>
                            <li><img src="./src/images/about/zendo2.jpg"/></li>
                            <li><img src="./src/images/about/zendo3.png"/></li>
                        </ul>
                        <div className="ownValue" style={{marginBottom:marginBottom}}>
                            <div className="ownValue1">
                            <p ><b>{Lang.ABOUTZENDOZH.PARTONE.TITLE}</b></p>
                            <p style={{lineHeight:lineHeight2}}>{Lang.ABOUTZENDOZH.PARTONE.CONTEXT_ONE}</p>
                            <p>{Lang.ABOUTZENDOZH.PARTONE.CONTEXT_TWO}</p>
                            <p style={{lineHeight:lineHeight2}}>{Lang.ABOUTZENDOZH.PARTONE.CONTEXT_THREE}</p>
                            <p>{Lang.ABOUTZENDOZH.PARTONE.CONTEXT_FOUR}</p>
                            </div>
                        </div>
                            <div className="swiper-container" style={{width:Width}}>
                                <div className="swiper-wrapper">
                                    <div className="about_1 swiper-slide">
                                        <div className="about_content_pic">
                                            <img src="./src/images/about/1trust.png"/>
                                        </div>
                                        <div className="about_points">
                                            <p><b>{this.state.Lang.ABOUTZENDOZH.PARTTWO.APPENDIX_ONE.TITLE}</b></p>
                                            <p>{this.state.Lang.ABOUTZENDOZH.PARTTWO.APPENDIX_ONE.CONTEXT_ONE}</p>
                                            <p>{this.state.Lang.ABOUTZENDOZH.PARTTWO.APPENDIX_ONE.CONTEXT_TWO}</p>
                                        </div>
                                    </div>
                                    <div className="about_1 swiper-slide">
                                        <div className="about_content_pic">
                                            <img src="./src/images/about/2dedicate.png"/>
                                        </div>
                                        <div className="about_points ">
                                            <p><b>{this.state.Lang.ABOUTZENDOZH.PARTTWO.APPENDIX_TWO.TITLE}</b></p>
                                            <p>{this.state.Lang.ABOUTZENDOZH.PARTTWO.APPENDIX_TWO.CONTEXT_ONE}</p>
                                            <p>{this.state.Lang.ABOUTZENDOZH.PARTTWO.APPENDIX_TWO.CONTEXT_TWO}</p>
                                        </div>
                                    </div>
                                    <div className="about_1 swiper-slide">
                                        <div className="about_content_pic">
                                            <img src="./src/images/about/3excellence.png"/>
                                        </div>
                                        <div className="about_points">
                                            <p><b>{this.state.Lang.ABOUTZENDOZH.PARTTWO.APPENDIX_THREE.TITLE}</b></p>
                                            <p>{this.state.Lang.ABOUTZENDOZH.PARTTWO.APPENDIX_THREE.CONTEXT_ONE}</p>
                                        </div>
                                    </div>
                                    <div className="about_1 swiper-slide">
                                        <div className="about_content_pic">
                                            <img src="./src/images/about/4wisdom.png"/>
                                        </div>
                                        <div className="about_points">
                                            <p><b>{this.state.Lang.ABOUTZENDOZH.PARTTWO.APPENDIX_FOUR.TITLE}</b></p>
                                            <p>{this.state.Lang.ABOUTZENDOZH.PARTTWO.APPENDIX_FOUR.CONTEXT_ONE}</p>
                                            <p>{this.state.Lang.ABOUTZENDOZH.PARTTWO.APPENDIX_FOUR.CONTEXT_TWO}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="pagination"></div>
                            </div>


                        <div className="about_marketplace">
                            <p>{Lang.ABOUTZENDOZH.PARTTWO.CONTEXT_ONE}</p>

                        </div>
                        <div className="about_line">
                            <div className="about_line1">
                                <img src="./src/images/index/line1.png" alt=""/>
                            </div>
                        </div>

                        <div className="about_zendo_info">
                            <p><b>{Lang.ABOUTZENDOZH.PARTTHREE.TITLE}</b></p>
                            <p>{Lang.ABOUTZENDOZH.PARTTHREE.CONTEXT_ONE}</p>
                            <p>{Lang.ABOUTZENDOZH.PARTTHREE.CONTEXT_TWO}</p>
                        </div>

                        <div className="about_introduce">
                            <ul>
                                <li>
                                    <img src="./src/images/about/dao1.png" />
                                    <p>{Lang.ABOUTZENDOZH.PARTTHREE.APPENDIX_ONE.TITLE}</p>
                                    <p>{Lang.ABOUTZENDOZH.PARTTHREE.APPENDIX_ONE.CONTEXT_ONE}</p>
                                    <p>{Lang.ABOUTZENDOZH.PARTTHREE.APPENDIX_ONE.CONTEXT_TWO}</p>
                                    <p>{Lang.ABOUTZENDOZH.PARTTHREE.APPENDIX_ONE.CONTEXT_THREE}</p>
                                </li>
                                <li>
                                    <img src="./src/images/about/dao2.png" />
                                    <p>{Lang.ABOUTZENDOZH.PARTTHREE.APPENDIX_TWO.TITLE}</p>
                                    <p>{Lang.ABOUTZENDOZH.PARTTHREE.APPENDIX_TWO.CONTEXT_ONE}</p>
                                    <p>{Lang.ABOUTZENDOZH.PARTTHREE.APPENDIX_TWO.CONTEXT_TWO}</p>
                                    <p>{Lang.ABOUTZENDOZH.PARTTHREE.APPENDIX_TWO.CONTEXT_THREE}</p>
                                </li>
                                <li>
                                    <img src="./src/images/about/dao3.png" />
                                    <p>{Lang.ABOUTZENDOZH.PARTTHREE.APPENDIX_THREE.TITLE}</p>
                                    <p>{Lang.ABOUTZENDOZH.PARTTHREE.APPENDIX_THREE.CONTEXT_ONE}</p>
                                    <p>{Lang.ABOUTZENDOZH.PARTTHREE.APPENDIX_THREE.CONTEXT_TWO}</p>
                                    <p>{Lang.ABOUTZENDOZH.PARTTHREE.APPENDIX_THREE.CONTEXT_THREE}</p>
                                </li>
                            </ul>

                        </div>
                        <div className="about_bom">
                            <ul>
                                <li>
                                    {/*<img src="./src/images/about/blog.png" alt=""/>*/}
                                    <p>{Lang.ABOUTZENDOZH.PARTTHREE.PARTFOUR.CONTEXT_ONE}</p>
                                </li>
                                <li>
                                    <p style={{lineHeight:lineHeight,marginTop:marginTop}}>{Lang.ABOUTZENDOZH.PARTTHREE.PARTFOUR.CONTEXT_TWO}</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                </div>

        )
    }
}
export default About