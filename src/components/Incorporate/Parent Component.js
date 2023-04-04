import React, { useState } from "react";
import Card from "../Card/index"

const ParentComponent = () => {
const [cardData, setCardData] = useState({
title: "Title",
subtitle: "Subtitle",
updatedAt: "2023-04-03",
uuid: "12345"
});

const handleCheckboxClick = () => {
setCardData({ ...cardData, isChecked: !cardData.isChecked });
};

return (
<div>
<Card data={cardData} handleCheckboxClick={handleCheckboxClick} />
</div>
);
};

export default ParentComponent;