import React from 'react';
import { Row, Col, Button, Slider} from 'antd';
import 'antd/lib/slider/style/index.css';


import styles from './index.less'


class SliderControlWithPlayer extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        playIcon: "caret-right",
        rateVal: 0,
      };
    }

    tick = () => {
      const { rateVal } = this.state;
      const { sliderMax, tick:tickMethod, interval=1000 } = this.props;
  
      this.timer = setTimeout(() => {
        if (rateVal >= sliderMax) {
          console.log('tick clear')
          clearTimeout(this.timer);
        } else {
          this.setState({
            rateVal:rateVal+1,
          });
          tickMethod(rateVal+1)
          this.tick()
        }
      }, interval);
    };
  
    stopTick = () => {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
    
    playControl = () => {
      const { playIcon } = this.state;
      this.setState({
        playIcon: playIcon === "pause"?"caret-right":"pause",
      });
      if (playIcon === "caret-right") {
        this.tick()
      }
      else {
        this.stopTick()
      }
    };

    onSliderChange = (value) => {
      const { onPlayerChange } = this.props;
      if (isNaN(value)) {
        return;
      }
      this.setState({
        rateVal: value,
      });
      onPlayerChange(value)
    }

  render(){
    const { playIcon, rateVal } = this.state;
    const { sliderMax=0 } = this.props;
    return (
      <Row gutter={16} className={styles.iconScale} >
        <Col span={1}>
        <Button type="link" shape="circle" icon={playIcon} onClick={this.playControl} />
        </Col>
        <Col span={23}>
          <Slider min={0} max={sliderMax} onChange={this.onSliderChange} value={rateVal} />
        </Col>
      </Row>
    )
  }
}

export default SliderControlWithPlayer;
