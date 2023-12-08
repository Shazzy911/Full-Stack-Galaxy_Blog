import Card from "./(featureditems)/card/Card"
import Featuring from "./(featureditems)/featuring/Featuring"
import Subscribe from "./(featureditems)/subscribe/Subscribe"
import style from "./Featured.module.scss"
const Featured = () => {
  return (
    <div className={style.container}>
      <Card/>
      <Subscribe/>
      <Featuring/>
    </div>
  )
}

export default Featured