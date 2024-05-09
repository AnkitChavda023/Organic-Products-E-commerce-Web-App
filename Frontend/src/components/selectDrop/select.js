import React, { useState } from "react";
import "../selectDrop/select.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
var _ = require('lodash');



const Select = ({data, placeholder, icon}) => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedItem, setselectedItem] = useState(placeholder);

  const [listData, setlistData] = useState(data);
  const [listData1, setlistData1] = useState(data);

  const openSelect = ()=>{
    setisOpenSelect(!isOpenSelect);
  }

  const closeSelect = (index , name)=>{
    setselectedIndex(index);
    setisOpenSelect(false);
    setselectedItem(name);
  }

// filtering the serach data
  const filterList = (e)=>{     
    const keyword = _.toLower(e.target.value);
    console.log(keyword);

    const list = _.filter(listData1,(item) =>{
      return _.startsWith(_.toLower(item),keyword);
    })

    const list2 = _.uniq(list);
    setlistData(list2);
  }

  return (
    <ClickAwayListener onClickAway={() => {
        setisOpenSelect(false);
      }}
    >
      <div className="selectDropWrapper cursor position-relative">
        {icon}
        <span className="openSelect" onClick={openSelect}>
          {" "}
          {selectedItem} <KeyboardArrowDownIcon />{" "}
        </span>
        {isOpenSelect === true && (
          <div className="selectDropMenu">
            <div className="searchField">
              <input type="text" placeholder="Search here... " onChange={filterList} />
            </div>
            <ul className="searchResults">
              {listData.map((item, index) => {
                return (
                  <li
                   key={index} onClick={() => closeSelect(index, item)}
                    className={`${selectedIndex === index ? "active" : ""}`}> {" "} {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};
export default Select;
