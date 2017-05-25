import {HashRouter, Route, Switch, Link, Redirect} from 'react-router-dom'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import axios from 'axios';
import {login} from '../login/LoginActions'
import {Menu} from 'antd';
import check from '../common/checked'
// import Login from '../login/src/pages/Login/login'
import Login from '../login'
// import Entrance from '../login/src/pages/entrance/entrance';
import Entrance from '../login/entrance';
import {connect} from 'react-redux'
import Left from '../consultation/src/common/left'
import Header from '../common/header'
import Content from '../consultation/src/common/content'
import '../consultation/src/less/editCnsulation.less'
import Apply from '../consultation/src/js/apply/apply'//申请会诊
import Looked from '../consultation/src/js/apply/daiShen/looked'//待审查看会诊
import NewConsultation from '../consultation/src/js/apply/NewConsultation'//申请会诊-新增会诊
import EditCnsulation from '../consultation/src/js/apply/editCnsultation'//申请会诊-编辑会诊
import EditReturn from '../consultation/src/js/apply/return/editReturn'//申请会诊-被退会诊编辑
import Invalid from '../consultation/src/js/invalid/invalid'//作废会诊-查询
import LookInvalid from '../consultation/src/js/invalid/lookInvalid'//作废会诊-查看
import Consulation from '../consultation/src/js/consulationTables/consulation'//会诊总表-查询
import LookConsulation from '../consultation/src/js/consulationTables/lookConsulation'//会诊总表-查看
import Checked from '../consultation/src/js/check/checked/checked'
import LookChecked from '../consultation/src/js/check/checked/lookChecked'
import LookHadReturn from '../consultation/src/js/check/hadReturn/lookHadReturn'
import LookWaitCheck from '../consultation/src/js/check/waitCheck/lookWaitCheck'
import ConsultationTask from '../consultation/src/js/task/consultationTask'
import LookConsultationTask from '../consultation/src/js/task/lookConsultationTask'
import api from '../common/API'
//以上是consultation

import LeftMine from '../mine/src/common/left'
import Mine from '../mine/src/js/mine/mine'
import Check from '../mine/src/js/mine/check'
//以上是 Mine 界面

import HealthLeft from '../doctor/src/common/left'
import Hospital from '../doctor/src/js/healthInfo/hospital/hospital'
import EditHospital from '../doctor/src/js/healthInfo/hospital/editHospital'
import AddHospital from '../doctor/src/js/healthInfo/hospital/addHospital'
import Doctor from '../doctor/src/js/healthInfo/doctor/doctor'
import EditDoctor from '../doctor/src/js/healthInfo/doctor/editDoctorl'
import AddDoctor from '../doctor/src/js/healthInfo/doctor/addDoctorl'
import Department from '../doctor/src/js/healthInfo/department/department'
//以上是健康医疗

import SysLeft from '../system/src/common/left'
import UsrMgmt from '../system/src/js/usrmgmt/usrMgmt'
import AddUsrMgmt from '../system/src/js/usrmgmt/addUsrMgmt'
import EditUsrMgmt from '../system/src/js/usrmgmt/editUsrMgmt'
import RoleMgmt from '../system/src/js/rolemgmt/rolemgmt'
import EditRolemgmt from '../system/src/js/rolemgmt/editRoleMgmt'
import AddRolemgmt from '../system/src/js/rolemgmt/addRoleMgmt'
import GiveAuthorization from '../system/src/js/rolemgmt/giveAuthorization'
import Memuauthority from '../system/src/js/memuauthority/memuauthority'
import MenuAuthorization from '../system/src/js/memuauthority/menuAuthorization'
import EditMemuauthority from '../system/src/js/memuauthority/editMmemuauthority'
import Log from '../system/src/js/log/log'
//以上是System
import ConferenceManage from '../conference/src/pages/ConferenceManage/conferenceManage';
import AddManage from '../conference/src/pages/ConferenceManage/addManage';
import PersonMeeting from '../conference/src/pages/PersonMeeting';
import CheckMeeting from '../conference/src/pages/PersonMeeting/checkMeeting';
//以上是会议

import WebRTCDemo from '../ReactWebRTC/src/meeting'
//以上是WebRTC

const SubMenu = Menu.SubMenu;
const jwtDecode = require('jwt-decode');
let serverD = api().serverAdress;
let reg = /^[0-9]+.?[0-9]*$/;
function matches (str) {
  let ar = str.split('/');
  if (reg.test(ar[ar.length - 1])) {
    return true
  }
}
function spl (str) {
  let ar = str.split('/');
  ar.splice(ar.length - 1);
  return ar.join('/')
}
let auth = [
  {
    id: 6,
    route: '#/consultation/apply'
  }, {
    id: 6,
    route: '#/consultation/apply/newConsultation'
  }, {
    id: 6,
    route: '#/consultation/apply/editCnsulation'
  }, {
    id: 6,
    route: '#/consultation/apply/addConsultation'
  },
  {
    id: 6,
    route: '#/consultation/apply/daiShen/looked'
  },
  {
    id: 6,
    route: '#/consultation/apply/return/ReturnRecord/editReturn'
  },
  {
    id: 9,
    route: '#/consultation/check/waitCheck/lookWaitCheck'
  },
  {
    id: 9,
    route: '#/consultation/check/hadReturn/lookHadReturn'
  },
  {
    id: 9,
    route: '#/consultation/check/checked/checked'
  }, {
    id: 9,
    route: '#/consultation/check/checked/lookChecked'
  },
  {
    id: 12,
    route: '#/consultation/task/consultationTask'
  }, {
    id: 12,
    route: '#/consultation/task/lookConsultationTask'
  },
  {
    id: 13,
    route: '#/consultation/invalid/invalid'
  }, {
    id: 13,
    route: '#/consultation/invalid/lookInvalid'
  },
  {
    id: 14,
    route: '#/consultation/consulationTables/consulation'
  }, {
    id: 14,
    route: '#/consultation/consulationTables/lookConsulation'
  },
  {
    id: 20,
    route: '#/healthInfo/hospital/hospital'
  },
  {
    id: 22,
    route: '#/healthInfo/department/department'
  },
  {
    id: 20,
    route: '#/healthInfo/hospital/editHospital'
  }, {
    id: 20,
    route: '#/healthInfo/hospital/addHospital'
  },
  {
    id: 21,
    route: '#/healthInfo/doctor/doctor'
  },
  {
    id: 21,
    route: '#/healthInfo/doctor/editDoctor'
  }, {
    id: 21,
    route: '#/healthInfo/doctor/addDoctor'
  },
];
let style = {'height': 'calc(100% -60 px)'};
class Cons extends Component {
  componentWillMount () {
    //check.checked();
    //this.checkAuthorization()
  }

  componentWillUpdate () {
    //this.checkAuthorization()
  }

  checkAuthorization () {
    if (localStorage.getItem('robertUserName')) {
      const bearer = localStorage.getItem('robertUserName');
      let decoded = jwtDecode(bearer);
      let permissions = decoded.permissions;
      let flag = true;
      let hashed = location.hash;
      if (hashed !== '/consultation/apply/blank') {
        if (matches(hashed)) {
          hashed = spl(hashed)
        }
        auth.map(function (ele) {
          if (ele.route === hashed) {
            if (permissions.indexOf(ele.id.toString()) !== -1) {
              flag = false
            }
          }
        });
        if (flag) {
          location.hash = '/entrance'
        }
      }
    }
  }

  render () {
    return (
      <HashRouter>
        <div>
          <Header/>
          <div style={style} className='pageBottom'>
            <Left/>
            <div className='content'>
              <Switch>
                <Route exact path='/consultation/apply/daiShen/looked/:id' component={Looked}/>
                <Route exact path='/consultation/apply/return/ReturnRecord/editReturn/:id' component={EditReturn}/>
                <Route exact path='/consultation/apply/newConsultation' component={NewConsultation}/>
                <Route exact path='/consultation/apply/editCnsulation/:id' component={EditCnsulation}/>
                <Route exact path='/consultation/invalid/lookInvalid/:id' component={LookInvalid}/>
                <Route exact path='/consultation/consulationTables/lookConsulation/:id' component={LookConsulation}/>
                <Route exact path='/consultation/check/waitCheck/lookWaitCheck/:id' component={LookWaitCheck}/>
                <Route exact path='/consultation/check/checked/lookChecked/:id' component={LookChecked}/>
                <Route exact path='/consultation/check/hadReturn/lookHadReturn/:id' component={LookHadReturn}/>
                <Route exact path='/consultation/task/lookConsultationTask/:id' component={LookConsultationTask}/>
                <Route exact path='/consultation/apply/blank' component={Content}/>
                <Route exact path='/consultation/apply' component={Apply}/>
                <Route exact path='/consultation/invalid' component={Invalid}/>
                <Route exact path='/consultation/consulationTables' component={Consulation}/>
                <Route exact path='/consultation/check' component={Checked}/>
                <Route exact path='/consultation/task' component={ConsultationTask}/>
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    )
  }
}

const Conference = () => (
  <HashRouter>
    <div>
      <Header/>
      <div className='content' style={{padding: '0 0', display: 'flex'}}>
        <LeftConference/>
        <Switch>
          <Route exact path='/conference/conferenceManage/addManage' component={AddManage}/>
          <Route exact path='/conference/conferenceManage/editManage/:id?/:type?' component={AddManage}/>
          <Route exact path='/conference/conferenceManage' component={ConferenceManage}/>
          <Route exact path='/conference/personMeeting/checkMeeting/:id' component={CheckMeeting}/>
          <Route exact path='/conference/personMeeting' component={PersonMeeting}/>
        </Switch>
      </div>
    </div>
  </HashRouter>
);

const LeftConference = () => (
  <Menu
    mode='inline'
    style={{width: 250, paddingTop: 0}}
  >
    <SubMenu key='sub1' title='会议管理'>
      <Menu.Item key='1'><Link to='/conference/conferenceManage'>会议管理</Link></Menu.Item>
      <Menu.Item key='2'><Link to='/conference/personMeeting'>我的会议</Link></Menu.Item>
    </SubMenu>
  </Menu>
);

const Me = () => (
  <HashRouter>
    <div>
      <Header/>
      <div style={style} className='pageBottom'>
        <LeftMine/>
        <Switch>
          <Route exact path='/mine/mine' component={Mine}/>
          <Route exact path='/mine/check' component={Check}/>
        </Switch>
      </div>
    </div>
  </HashRouter>
);

const Health = () => (
  <HashRouter>
    <div>
      <Header/>
      <div style={style} className='pageBottom'>
        <HealthLeft/>
        <Switch>
          <Route exact path='/health/healthInfo/blank' component={Content}/>
          <Route exact path='/health/healthInfo/department' component={Department}/>
          <Route exact path='/health/healthInfo/hospital/editHospital/:id' component={EditHospital}/>
          <Route exact path='/health/healthInfo/hospital/addHospital' component={AddHospital}/>
          <Route exact path='/health/healthInfo/doctor/editDoctor/:id' component={EditDoctor}/>
          <Route exact path='/health/healthInfo/doctor/addDoctor' component={AddDoctor}/>
          <Route exact path='/health/healthInfo/doctor' component={Doctor}/>
          <Route exact path='/health/healthInfo/hospital' component={Hospital}/>
        </Switch>
      </div>
    </div>
  </HashRouter>
);

const System = () => (
  <HashRouter>
    <div>
      <Header/>
      <div style={style} className='pageBottom'>
        <SysLeft/>
        <Switch>
          <Route exact path='/system/blank' component={Content}/>
          <Route exact path='/system/usrmgmt' component={UsrMgmt}/>
          <Route exact path='/system/log' component={Log}/>
          <Route exact path='/system/usrmgmt/addUsrmgmt' component={AddUsrMgmt}/>
          <Route exact path='/system/usrmgmt/editUsrmgmt/:id' component={EditUsrMgmt}/>
          <Route exact path='/system/rolemgmt' component={RoleMgmt}/>
          <Route exact path='/system/rolemgmt/addRolemgmt' component={AddRolemgmt}/>
          <Route exact path='/system/rolemgmt/editRolemgmt/:id' component={EditRolemgmt}/>
          <Route exact path='/system/rolemgmt/giveAuthorization' component={GiveAuthorization}/>
          <Route exact path='/system/memuauthority' component={Memuauthority}/>
          <Route exact path='/system/memuauthority/menuAuthorization' component={MenuAuthorization}/>
          <Route exact path='/system/memuauthority/editMemuauthority' component={EditMemuauthority}/>
        </Switch>
      </div>
    </div>
  </HashRouter>
);

class App extends Component {
  state = {
    isValidated: false
  };

  componentDidMount () {
    if (localStorage.getItem('robertUserName')) {
      axios.request({
        url: '/api/conference/page?id=1',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('robertUserName'),
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        },
      }).then(response => {
        console.log(response);
        if (response.status === 200) {
          if (response.data.code === 200) {
            this.props.login(localStorage.getItem('robertUserName'));
            this.setState({
              isValidated: true
            })
          } else {
            this.setState({
              isValidated: true
            })
          }
        }
      }).catch(e => {
        this.setState({
          isValidated: true
        });
      })
    } else {
      this.setState({
        isValidated: true
      })
    }
  }

  render () {
    let {isValidated} = this.state;
    return (
      <HashRouter>
        {
          isValidated && <div>
            <Route exact path='/' render={() => this.props.token ? <Redirect to="/entrance"/> : <Login/>}/>
            <Route path='/entrance' render={() => this.props.token ? <Entrance/> : <Redirect to="/"/>}/>
            <Route path='/consultation' render={() => this.props.token ? <Cons/> : <Redirect to="/"/>}/>
            <Route path='/mine' render={() => this.props.token ? <Me/> : <Redirect to="/"/>}/>
            <Route path='/health' render={() => this.props.token ? <Health/> : <Redirect to="/"/>}/>
            <Route path='/system' render={() => this.props.token ? <System/> : <Redirect to="/"/>}/>
            <Route path='/conference' render={() => this.props.token ? <Conference/> : <Redirect to="/"/>}/>
            < Route path='/meeting/:id?/:type?'
                    component={() => this.props.token ? <WebRTCDemo/> : <Redirect to='/'/>}/>
          </div>
        }
      </HashRouter>
    )
  }
}

const mapStateToProps = state => ({
  token: state.login.token,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({login}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
