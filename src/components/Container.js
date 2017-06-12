import React ,{ Component } from 'react';
import {Link} from 'react-router';
import BaiduMap from './baiaduMap';
import GoogleMaps from  './goopleMaps'
import ZH from'../translator/translation.zh';
import ZHF from'../translator/translation.zhf';
import EN from '../translator/translation.en';


let language = navigator.browserLanguage?navigator.browserLanguage:navigator.language,
    year = new Date(),
    closeBtn;
class Container extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen: false,
            positionIndex:0,
            positionImg:["./src/images/contact/sg.jpg","./src/images/contact/cd.jpg"],

            isTrue:true,
            lang:language.indexOf('zh')!==0?EN:ZH,
            whatKindOfZH:false,
            isEn:false,
            showGoTop:false,
            changeYear:year.getFullYear()

        }
    }
    toggleModal(){
        this.setState({
            isOpen: !this.state.isOpen
        },()=>{
            this.onChangebg();
        });

    }
    onChangebg(){
        if(this.state.isOpen){

            $('#container').show();
            $('#modal').show();
        }
    }
    onCloseModal(){
        this.setState({
            isOpen: !this.state.isOpen
        },()=>{

            this.onChangeModal();

        });
    }
    onChangeModal(){

        setTimeout(() => { // need do it in next loop
            $('#modal').hide();

            $('#container').hide();

        },1000)
    }
    changePosition1(){

        this.setState({
            positionIndex:0,
            isTrue:true,


        })
    }
    changePosition2(){
        this.setState({
            positionIndex:1,
            isTrue:false,

        })

    }
    isWhatLang(){
        if(language.indexOf('zh')!==0)
        {
            this.setState({isEn:true})
        }else {
            this.setState({whatKindOfZH:true})
        }

    }
   componentWillMount(){
        this.isWhatLang()
   }
   componentDidMount(){
       $('.contact_closeBtn img').mouseover(
           function(){
            $(this).animate({rotate:'90deg'},500)
       }
       ).mouseout(
           function(){
               $(this).animate({rotate:'0deg'},500)
           }
       )
   }

    goTopShow(){
        if(window.pageYOffset>=500){
          this.setState({
              showGoTop:true
          })
        }
        else{
            this.setState({
                showGoTop:false
            })
        }
    }

    render(){

        let url = this.props.location.pathname!==('/')&&this.props.location.pathname!==('/home'),
            show = url?'none':'block',
            isOk = this.state.isTrue?'block':'none',
            isOk2 = this.state.isTrue?'none':'block',
            isColor = this.state.isTrue? "#00b2ff":"",
            isColor2 = this.state.isTrue?"":"#00b2ff",
            cName = this.state.isOpen?'enterIn' :'enterOut',
            goTop = this.state.showGoTop?'goTop':'',
            goTop1 = this.state.showGoTop?'block':'none',
            bgStyle = this.state.isOpen? '':'bgOut',
            isMap = this.state.lang === ZH? 'block':'none';

        return(
            <div className="containers" onWheel={()=>this.goTopShow()}>

                <div className="fix-header" style={{height:url?'0':'50px'}} >
                    <div className="w1220 w1220-Center" style={{display:show}}>
                        <div className="fix-header-nav">
                            {/*<a ><i className="help"> </i>{this.state.lang.NAVIGATION.SUPPORT}</a>*/}

                            <a onClick={()=>{this.toggleModal()}}><i className="contact"> </i>{this.state.lang.NAVIGATION.CONTACT}</a>
                            <a  className="lang-father clear-margin">{this.state.isEn? 'English':(this.state.whatKindOfZH?'简体中文':'繁體中文')}<i className="down-arrow r "> </i>
                                <ul className="lang">
                                    <li onClick={()=>
                                        this.state.whatKindOfZH?this.setState({lang:ZHF,whatKindOfZH:!this.state.whatKindOfZH,isEn:false}):this.setState({lang:ZH,whatKindOfZH:!this.state.whatKindOfZH,isEn:false})}
                                    >{this.state.whatKindOfZH?'繁體中文':'简体中文'}</li>
                                    <li onClick={()=>this.state.isEn?this.setState({lang:ZHF,isEn:false,whatKindOfZH:false}):this.setState({lang:EN,isEn:true,whatKindOfZH:false})}
                                    >{this.state.isEn?'繁體中文':'English'}</li>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>

                <nav className={url?'nav':''}>
                    <div className="w1220 w1220-Center">
                        <Link to="/home" className="logo l" />
                        <ul className="nav-ul r">
                            <li className={this.props.location.pathname === '/trading'?'li-change':''}><Link to="/trading" >{this.state.lang.NAVIGATION.TRADING}</Link></li>
                            <li className={this.props.location.pathname === '/about'?'li-change':''}><Link to="/about">{this.state.lang.NAVIGATION.ABOUT}</Link></li>
                            {/*<li className={this.props.location.pathname === '/job'?'li-change':''}><Link to="/job">{this.state.lang.NAVIGATION.JOB}</Link></li>*/}
                        </ul>
                    </div>
                </nav>

                <div>
                    {this.props.children && React.cloneElement(this.props.children, {
                        LANG: this.state.lang,
                        isEn:this.state.isEn
                    })}
                </div>
                <footer>
                    <div className="foot-pic" >
                        <div className="w1220 w1220-Center">
                            <div className="connect-us">
                                <p>{this.state.lang.FOOTER.CONTEXT}</p>
                                <p>{this.state.lang.FOOTER.TEL}</p>
                            </div>
                        </div>
                    </div>
                    <div className="foot-bottom">
                        <div className="w1220 w1220-Center">
                            <p>&copy; {this.state.changeYear} &nbsp;Zendo Technology</p>
                            <div className="foot-nav" onClick={()=>document.body.scrollTop = document.documentElement.scrollTop = 0}>
                                <Link to="/home">{this.state.lang.NAVIGATION.HOME}</Link>|
                                <Link to="/trading">{this.state.lang.NAVIGATION.TRADING}</Link>|
                                <Link to="/about">{this.state.lang.NAVIGATION.ABOUT}</Link>|
                                {/*<Link to="/job">{this.state.lang.NAVIGATION.JOB}</Link>|*/}
                                <Link to="#"  onClick={()=>{this.toggleModal()}}>{this.state.lang.NAVIGATION.CONTACT.toUpperCase()}</Link>
                            </div>
                        </div>
                    </div>




                </footer>
                <div id="container" className={bgStyle}>
                    <div id="modal" className={cName}>
                        <div className="contact_title" >
                            <p><b>{this.state.lang.CONTACTUS}</b></p>
                            <div className="contact_closeBtn" id="contact_closeBtn">
                                <img src="./src/images/contact/close.png" onClick={()=>{this.onCloseModal()}} />
                            </div>
                        </div>
                        <div className="contact_Mid">
                            <img src={this.state.positionImg[this.state.positionIndex]} />
                            <div className="contact_map">
                                    <GoogleMaps positionIndex={this.state.positionIndex} lange={this.state.isEn}/>

                                   <BaiduMap positionIndex={this.state.positionIndex} lange={this.state.isEn}/>



                            </div>
                        </div>
                        <div className="contact_bom">
                            <img src="./src/images/contact/map.png" alt=""/>
                            <div className="contact_bom_position">
                                <ul>
                                    <li>
                                        <p onClick={()=>{this.changePosition1()}} style={{color:isColor}}>
                                            <img src="./src/images/contact/mapdot.png" style={{display:isOk}}/>
                                            <b>{this.state.lang.PLEASECONTACT.TITLE}</b>
                                        </p>
                                        <p>
                                            {this.state.lang.PLEASECONTACT.CONTEXT_ONE}
                                        </p>
                                        <p>
                                            420 North Bridge Road, #5-02/03
                                            <br/>
                                            North Bridge Centre
                                            <br/>
                                            Singapore 188727
                                        </p>
                                        <p>
                                            E: info@zendotechnology.com
                                            <br/>
                                            T: +65 64004988
                                        </p>
                                    </li>
                                    <li>
                                        <p onClick={()=>{this.changePosition2()}} style={{color:isColor2}}>
                                            <img src="./src/images/contact/mapdot.png" style={{display:isOk2}}/>
                                            <b>{this.state.lang.PLEASECONTACT.TITLE1}</b>
                                        </p>
                                        <p>
                                            {this.state.lang.PLEASECONTACT.CONTEXT_TWO}
                                        </p>
                                        <p>
                                            {this.state.lang.PLEASECONTACT.CONTEXT_THREE}
                                            <br/>
                                            {this.state.lang.PLEASECONTACT.CONTEXT_FOUR}
                                            <br/>
                                            {this.state.lang.PLEASECONTACT.CONTEXT_FIVE}



                                        </p>
                                        <p>
                                            E: support@xceder.com
                                            <br/>
                                            T: +86 28 83258888
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>



                </div>
                <div className={goTop} style={{display:goTop1}} onClick={()=>{
                    this.setState({showGoTop:false})
                    document.body.scrollTop = document.documentElement.scrollTop = 0}}>
                    <img src="./src/images/btp.png" alt="Top"/>
                </div>
            </div>

        )
    }
}

export default Container