import React from 'react';
import MiniDrawer from '../../components/Menu';
import CustomizedDialogs from '../../components/Modal';

import "./styles.scss"

import bot from '../../images/bot.jpg'
import man_1 from '../../images/man_1.jpg'
import man_2 from '../../images/man_2.jpg'
import wm_1 from '../../images/wm_1.jpg'
import wm_2 from '../../images/wm_2.jpg'
import BadgeOverlap from '../../components/Badge';
import MouseOverPopover from '../../components/Popover';

const Manager = () => {

  const analytics = [
    {
      title: 'Solicitações atendidas',
      value: '15'
    },
    {
      title: 'Tempo médio de atendimento',
      value: '00:12 h'
    },
    {
      title: 'Solicitações em aberto',
      value: '7'
    },
  ]

  const logs = [
    {
      title: 'Solicitação atendida - #28346234',
      description: 'A solicitação de número XXXXXXX foi atendida',
      datetime: '08:13 16/01/2021',
      img: bot,
    },
    {
      title: 'Login de usuário',
      description: 'O usuário XXXXXXX realizou login no sistema',
      datetime: '08:13 16/01/2021',
      img: man_1,
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex ante, tempor fringilla scelerisque ac, vehicula sit amet arcu. Vestibulum.',
      datetime: '08:13 16/01/2021',
      img: man_2
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex ante, tempor fringilla scelerisque ac, vehicula sit amet arcu. Vestibulum.',
      datetime: '08:13 16/01/2021',
      img: wm_1,
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex ante, tempor fringilla scelerisque ac, vehicula sit amet arcu. Vestibulum.',
      datetime: '08:13 16/01/2021',
      img: wm_2,
    },
  ]

  const attendants = [
    {
      img: bot,
      status: true,
      name: 'Bot'
    },
    {
      img: man_1,
      status: true,
      name: 'Alex'
    },
    {
      img: wm_1,
      status: false,
      name: 'Jennifer'
    },
    {
      img: man_2,
      status: true,
      name: 'Paul'
    },
    {
      img: wm_2,
      status: false,
      name: 'Ygritte'
    },
  ]

  return (
    <div className='container'>
      <div className='menu-app-bar'>
        <MiniDrawer>
          <div className='dashboard-content'>
            <div className='border-div'>
              <p>Informações</p>
              <div>
                <div className='dashboard-resumes'>
                  {
                    analytics.map(data => {

                      return (
                        <div>
                          <h3>{data.title}</h3>
                          <h2>{data.value}</h2>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>

            <div className='border-div'>
              <p>Logs</p>
              <div>
                <div className='dashboard-logs'>
                  {
                    logs.map(log => {

                      return (
                        <div>
                          <CustomizedDialogs
                            title={log.title}
                            description={log.description}
                            img={log.img}
                            button={
                              <button className='modal-btn'>
                                <div>
                                  <img src={log.img} alt='' />
                                  <p>{log.title}</p>
                                </div>
                                <p>{log.datetime}</p>
                              </button>
                            }
                          >

                          </CustomizedDialogs>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>

            <div className='border-div'>
              <p>Usuários</p>
              <div>
                <div className='dashboard-attendants'>
                  {
                    attendants.map(attendant => {

                      const color = attendant.status ? '#008000' : '#ff0000'

                      return (
                        <div>
                          <MouseOverPopover name={attendant.name}>
                            <BadgeOverlap color={color}>
                              <img src={attendant.img} alt='' />
                            </BadgeOverlap>
                          </MouseOverPopover>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </MiniDrawer>
      </div>
    </div>
  );
}

export default Manager;