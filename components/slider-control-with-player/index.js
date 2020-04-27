import React from 'react';
import { Row, Col, Button, Slider} from 'antd';
import styles from './index.less'


class SliderControlWithPlayer extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        playIcon: "caret-right",
        sliderMax: 0,
        rateVal: 0,
      };
    }
    

  render(){
    const { playIcon, sliderMax, rateVal } = this.state;
    return (
      <Row gutter={16}  className={styles.iconScale}>
        <Col span={1}>
        <Button type="link" shape="circle" icon={playIcon} onClick={this.playControl} />
        </Col>
        <Col span={23}>
          <Slider className={styles.sliderScale} min={0} max={sliderMax} onChange={this.onSliderChange} value={typeof rateVal === 'number' ? rateVal : 0} />
        </Col>
      </Row>
    )
  }
}

export default SliderControlWithPlayer;
