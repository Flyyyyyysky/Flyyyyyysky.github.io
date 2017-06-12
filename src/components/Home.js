import React ,{ Component } from 'react';
import {Link} from 'react-router';
import EN from '../translator/translation.en';
const ENPic=[
    {src: './src/images/index/img1+.jpg', selected:true},
    {src: './src/images/index/img2+.jpg', selected:true},
    {src: './src/images/index/img3+.jpg', selected:true},
]
class Home extends Component {
    constructor (...args) {
        super(...args);
        this.state = {
            imageSrc: [
                {src: './src/images/index/img1.jpg', selected:true},
                {src: './src/images/index/img2.jpg', selected:true},
                {src: './src/images/index/img3.jpg', selected:true},
            ],
            currentIndex: 0,
        };

    }
    componentWillMount(){

    }
    componentDidMount() {
        this.fontAnimation(this.state.currentIndex)
        this.autoPlay();
        $('.positionImg').mouseover(
            function(){
                $(this).animate({scale:'1.2'},500);
            }
        ).mouseout(
            function(){
                $(this).animate({scale:'1'},500);
            }
        );
        $('.info').children('li').animate(500);


    }

    componentWillUnmount(){
        this.stop(0);
    }

    autoPlay(){
        // this.fontAnmationLeave();
        this.timer=window.setInterval(()=>{
            this.state.currentIndex++;
            if(this.state.currentIndex===this.state.imageSrc.length){
                this.state.currentIndex=0

            }
            this.setState({
                index:this.state.index
            });
            this.fontAnimation(this.state.currentIndex)

        },5000)
    }
    fontAnimation(index){
        if(index===0){

            $('.weel_font').children('pre').animate({top:'-30px',
                opacity:1},1000,


            );
            $('.weel_font').children('p').animate({top:'80px',
                opacity:1},1500,


            );
            $('.weel_font1').children('.pTwo').css({left:'0',opacity:0});
            $('.weel_font2').children('.pThree').css({top:'125px',opacity:0});

        }else if(index === 1){


                    // $('.weel_font1').children('p').animate({left:'-30px',
                    //     opacity:0}
                    // );
                    $('.weel_font1').children('p:first').animate({left:'60px',
                        opacity:1},1000,

                    );
                    $('.weel_font1').children('p:last').animate({left:'92px',
                        opacity:1},1000,

                    );
                $('.weel_font').children('.pOne').css({top:'150px',opacity:0});
                $('.weel_font2').children('.pThree').css({top:'125px',opacity:0});


        }else if(index ===2 ){
            $('.weel_font2').children('.fontp1').animate({top:'10px',
                    opacity:1},1000,

            );
            $('.weel_font2').children('.fontp2').animate({top:'70px',
                opacity:1},1000,

            );
            $('.weel_font2').children('.fontp3').animate({top:'100px',
                opacity:1},1500,


            );
            $('.weel_font').children('.pOne').css({top:'150px',opacity:0});
            $('.weel_font1').children('.pTwo').css({left:'0',opacity:0});
        }
    }
    fontAnmationEnter(e){
        if(e.index===0){

            $('.weel_font').children('pre').animate({top:'-30px',
                    opacity:1},1000,


            );
            $('.weel_font').children('p').animate({top:'80px',
                opacity:1},1500,

            );
            $('.weel_font1').children('.pTwo').css({left:'0',opacity:0});
            $('.weel_font2').children('.pThree').css({top:'125px',opacity:0});

        }else if(e.index === 1){

            $('.weel_font1').children('p:first').animate({left:'60px',
                    opacity:1},500,

            );
            $('.weel_font1').children('p:last').animate({left:'92px',
                opacity:1},1000,

            );
            $('.weel_font').children('.pOne').css({top:'150px',opacity:0});
            $('.weel_font2').children('.pThree').css({top:'125px',opacity:0});


        }else if(e.index ===2 ){
            $('.weel_font2').children('.fontp1').animate({top:'10px',
                    opacity:1},500,

            );
            $('.weel_font2').children('.fontp2').animate({top:'70px',
                opacity:1},1000,

            );
            $('.weel_font2').children('.fontp3').animate({top:'100px',
                opacity:1},1500,

            );
            $('.weel_font').children('.pOne').css({top:'150px',opacity:0});
            $('.weel_font1').children('.pTwo').css({left:'0',opacity:0});
        }
    }

    stop(e){
        this.setState({
            currentIndex:e.index
        });
        window.clearInterval(this.timer)
    }


    render(){
        const Lang = this.props.LANG;
        let width,
            width1,
            marginLeft,
            marginLeft1,
            marginLeft2,
            marginTop,
            marginTop1,
                top;
        switch (Lang){
            case EN:
                width = 890;
                width1=1010;
                marginLeft=86;
                marginLeft1=40;
                marginLeft2=210;
                marginTop = 52;
                marginTop1 = 20;
                top = 60;
                break;
            default:
        }
        return(
            <div className="home">
                <div className="wheel_pic">
                    <div id="slide_show">
                        <img className={this.state.currentIndex===0? 'active': ''} src={this.state.imageSrc[0].src} alt="slide1" />
                        <img className={this.state.currentIndex===1? 'active': ''} src={this.state.imageSrc[1].src} alt="slide2" />
                        <img className={this.state.currentIndex===2? 'active': ''} src={this.state.imageSrc[2].src} alt="slide3"/>
                        <div className="weel_font " style={{display:this.state.currentIndex===0?'block':'none',width:width}}>
                            <pre style={{marginLeft:marginLeft1}} className="pOne">
                                {Lang.WELCOME.PARTFOUR.APPENDIX_ONE.CONTEXT_ONE}
                            </pre>
                            <p  className="pOne" style={{left:marginLeft2}}>
                                {Lang.WELCOME.PARTFOUR.APPENDIX_ONE.CONTEXT_TWO}
                            </p>
                        </div>
                        <div className="weel_font1" style={{display:this.state.currentIndex===1?'block':'none' }}>
                            <p style={{top:marginTop1}} className="pTwo">
                                {Lang.WELCOME.PARTFOUR.APPENDIX_TWO.CONTEXT_ONE}
                            </p>
                            <p style={{top:marginTop}} className="pTwo">
                                {Lang.WELCOME.PARTFOUR.APPENDIX_TWO.CONTEXT_TWO}
                            </p>
                        </div>
                        <div className="weel_font2" style={{display:this.state.currentIndex===2?'block':'none',width:width1 }}>
                            <p className="fontp1 pThree">
                                {Lang.WELCOME.PARTFOUR.APPENDIX_THREE.CONTEXT_ONE}
                            </p>
                            <p style={{left:marginLeft}} className="fontp2 pThree">
                                {Lang.WELCOME.PARTFOUR.APPENDIX_THREE.CONTEXT_TWO}
                            </p>
                            <p className="fontp3 pThree">
                                {Lang.WELCOME.PARTFOUR.APPENDIX_THREE.CONTEXT_THREE}
                            </p>
                        </div>
                    </div>

                    <ul id="wheel_btn">
                        {
                            this.state.imageSrc.map((item,index)=>{
                                return <li key={index}   onMouseEnter={()=>{this.stop({index});this.fontAnmationEnter({index})}}  onMouseLeave={()=>{this.autoPlay()}}  ><span className={index===this.state.currentIndex?'pic_selected':'' }> </span></li>
                            })
                        }
                    </ul>
                    <Link to="/trading"><div className={this.state.currentIndex===0? 'center-button btn_active':'center-button'}  onMouseEnter={()=>this.stop({index:0})}  onMouseLeave={()=>this.autoPlay()} > {Lang.ZendoTrading}</div></Link>
                </div>

                <div className="welcome">
                    <div className="w1220 w1220-Center">
                        <div className="title">
                            <h1>{Lang.WELCOME.PARTONE.TITLE}</h1>
                            <p>{Lang.WELCOME.PARTONE.CONTEXT_ONE}</p>
                            <p>{Lang.WELCOME.PARTONE.CONTEXT_TWO}</p>
                            <div className="line1"> </div>
                        </div>

                        <ul className="info">
                            <li className="home_center1">
                                <img src="./src/images/index/zen1.png" alt="全球化的视野"/>
                                <h3>{Lang.WELCOME.PARTONE.APPENDIX_ONE.TITLE}</h3>
                                <p>{Lang.WELCOME.PARTONE.APPENDIX_ONE.CONTEXT_ONE}</p>
                                <p>{Lang.WELCOME.PARTONE.APPENDIX_ONE.CONTEXT_TWO}</p>
                            </li>
                            <li className="home_center2">
                                <img src="./src/images/index/zen2.png" alt="技术"/>
                                <h3>{Lang.WELCOME.PARTONE.APPENDIX_TWO.TITLE}</h3>
                                <p>{Lang.WELCOME.PARTONE.APPENDIX_TWO.CONTEXT_ONE}</p>
                                <p>{Lang.WELCOME.PARTONE.APPENDIX_TWO.CONTEXT_TWO}</p>
                            </li>
                            <li className="home_center3">
                                <img src="./src/images/index/zen3.png" alt="投资"/>
                                <h3>{Lang.WELCOME.PARTONE.APPENDIX_THREE.TITLE}</h3>
                                <p>{Lang.WELCOME.PARTONE.APPENDIX_THREE.CONTEXT_ONE}</p>
                                <p>{Lang.WELCOME.PARTONE.APPENDIX_THREE.CONTEXT_TWO}</p>
                            </li>
                        </ul>
                        <div className="line2"> </div>

                        <div className="world-map">
                            <h2>{Lang.WELCOME.PARTTWO.TITLE}</h2>
                            <p>{Lang.WELCOME.PARTTWO.CONTEXT_ONE}</p>
                        </div>
                        <ul className="concept">
                            <li className="concept_center1">
                                <img src="./src/images/index/concept1.png" alt={Lang.WELCOME.PARTTWO.APPENDIX_ONE.TITLE}/>
                                <h3>{Lang.WELCOME.PARTTWO.APPENDIX_ONE.TITLE}</h3>
                                <p>{Lang.WELCOME.PARTTWO.APPENDIX_ONE.CONTEXT_ONE}</p>
                            </li>
                            <li className="concept_center2">
                                <img src="./src/images/index/concept2.png" alt={Lang.WELCOME.PARTTWO.APPENDIX_TWO.TITLE}/>
                                <h3>{Lang.WELCOME.PARTTWO.APPENDIX_TWO.TITLE}</h3>
                                <p>{Lang.WELCOME.PARTTWO.APPENDIX_TWO.CONTEXT_ONE}</p>
                            </li>
                            <li className="concept_center3">
                                <img src="./src/images/index/concept3.png" alt={Lang.WELCOME.PARTTWO.APPENDIX_THREE.TITLE}/>
                                <h3>{Lang.WELCOME.PARTTWO.APPENDIX_THREE.TITLE}</h3>
                                <p>{Lang.WELCOME.PARTTWO.APPENDIX_THREE.CONTEXT_ONE}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="location">
                    <div className="line1"> </div>
                    <h2>{Lang.WELCOME.PARTTHREE.TITLE}</h2>

                    <p> <i> </i>{Lang.WELCOME.PARTTHREE.CONTEXT}</p>
                    <ul>
                        <li>
                            <img src="./src/images/index/sg.jpg" alt="sg" className="positionImg"/>
                            <div className="sg_text"></div>
                        </li>
                        <li>
                            <img src="./src/images/index/cd.jpg" alt="cd" className="positionImg"/>
                            <div className="cd_text"></div>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}
export default Home