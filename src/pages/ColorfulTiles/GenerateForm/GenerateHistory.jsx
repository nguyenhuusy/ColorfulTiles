import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generate_tiles2 } from '../../../redux/actions/getColorActions';
import { saveColor, nameColor, displayColor } from '../../../redux/actions/saveColorActions';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../../utils/common';
import { Link } from 'react-router-dom';
import './GenerateHistory.scss';
class GenerateHistory extends Component {
    constructor() {
        super();

        this.state = {
            row: 0,
            column: 0,
            data: '',
            display: [],
            nameinput: '',
            //savecolors: getDataFromLocalStorage('colortile'),
            //namecolors: getDataFromLocalStorage('colorname')
        }
    }

    // deleteTile=()=>{
    //     const {savecolors,namecolors,saveColor,nameColor}=this.props;
    //     const {item,name}=this.props;
    //     const colortileUpdate=savecolors.filter((data)=>JSON.stringify(data)!==JSON.stringify(item));
    //     const nameUpdate=namecolors.filter((data)=>JSON.stringify(data)!==JSON.stringify(name));
    //     // const a=[1,2,3,4,5];
    //     // const b=a.filter((data)=>data!==2);
    //     // console.log('b',b);
    //     saveColor(colortileUpdate);
    //     nameColor(nameUpdate);

    // }
    changeDisplay = () => {
        const { item, name, idx, savecolors, namecolors, displaycolors, displayColor } = this.props;
        const { display } = this.state;
        if (displaycolors[display] === 0) {
            displaycolors[display] = 1
        } else { displaycolors[display] = 0 };
        displayColor(displaycolors);
    }
    render() {
        const { item, name, idx, savecolors, namecolors, displaycolors, displayColor } = this.props;
        const { display } = this.state;

        return (
            <div className="generate_history">
                {savecolors.map((item, idx) =>
                    <div key={idx}>
                        <button className="button-history" key={idx} onClick={() => {
                            if (displaycolors[idx] === 0) {
                                displaycolors[idx] = 1;
                                displayColor(displaycolors);
                                this.setState({ display: displaycolors })
                            } else {
                                displaycolors[idx] = 0;
                                displayColor(displaycolors);
                                displayColor(displaycolors);
                                this.setState({ display: displaycolors });
                            }
                        }}>{namecolors[idx]}</button>
                        {!!display[idx] && <div className="history_item">
                            <button className="button-history" onClick={() => {
                                //const colortileUpdate=savecolors.filter((data)=>JSON.stringify(data)!==JSON.stringify(item));
                                //const nameUpdate=namecolors.filter((data)=>JSON.stringify(data)!==JSON.stringify(namecolors[idx]));
                                //const displayUpdate= 
                                const colortileUpdate = savecolors.splice(idx, 1);
                                const nameUpdate = namecolors.splice(idx, 1);
                                const displayUpdate = displaycolors.splice(idx, 1);

                                saveColor(savecolors);
                                nameColor(namecolors);
                                displayColor(displaycolors);
                                this.setState({ display: displaycolors });
                                
                            }}>Delete</button>
                            {item.map((row, rowidx) =>
                                <div key={rowidx} className="tile-row">
                                    {row.map((column, columnidx) =>
                                        <div
                                            className="tile"
                                            key={columnidx}
                                            style={{ backgroundColor: column }}

                                        />
                                    )}

                                </div>
                            )}
                        </div>
                        }
                    </div>
                )}
                {/* <button key={idx} onClick={this.changeDisplay}>{name}</button>   
             {!!display && <div className="history_item">
                 <button onClick={this.deleteTile}>Delete</button>
            {item.map((row, rowidx) =>
              <div key={rowidx} className="tile-row">
                {row.map((column, columnidx) =>
                  <div
                    className="tile"
                    key={columnidx}
                    style={{ backgroundColor: column }}

                  />
                )}
              </div>
            )}
          </div>
          } */}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getcolors: state.getcolor.data,
    savecolors: state.saveColor.data,
    namecolors: state.saveColor.name,
    displaycolors: state.saveColor.display
})
export default connect(mapStateToProps, { saveColor, nameColor, displayColor, generate_tiles2 })(GenerateHistory);