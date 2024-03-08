import style from "./Right_layout.module.scss";
import Card from "./right_layout_items/card/Card";
import Featuring from "./right_layout_items/featuring/Featuring";
import Subscribe from "./right_layout_items/subscribe/Subscribe";
const Right_layout = () => {
  return (
    <div className={style.container}>
      <Card/>
      <Subscribe/>
      <Featuring/>
    </div>
  )
}

export default Right_layout;