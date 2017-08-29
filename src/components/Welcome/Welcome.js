import React, { Component } from 'react';
import { Motion, spring} from 'react-motion';
import { Content, ProgressText, Progress} from './Welcome.style';


class LandingPage extends Component {
    static propTypes= {};

    render(){
        const textStyle ={

            overflow: 'hidden',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
        }
        return(
            <Content>
                <ProgressText  >
                    <h1>Welcome To Kline Media!</h1>
                    <ul>
                        <li>YOUTUBE</li>
                        <li>FACEBOOK</li>
                        
                    </ul>
                    <Progress>
                        <Motion 

                            defaultStyle={{width: 0}}
                            style={{width: spring(100, {stiffness: 34, damping: 19})}}>
                            {({width}) => 
                           
                        <h1 style={{
                             ...textStyle,
                            width: `${width}% `
                        }}>Welcome To Kline Media!</h1>                        
                        }
                        </Motion>
                    </Progress>
                </ProgressText>
             </Content> 
        );
    }
}

export default LandingPage;









//PROGRESS TEXT SOCIAL TAGS



























