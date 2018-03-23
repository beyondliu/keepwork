import ModHeader from './web/header'
import ModTitle from './web/title'
import ModBoard from './web/board'
import ModText from './web/text'
import ModImgLoop from './web/imgLoop'
import ModParacraft from './web/paracraft'

var modsList = [
  {
    id: 1,
    label: '全部',
    mods: [ModHeader, ModTitle, ModBoard, ModImgLoop, ModText, ModParacraft]
  }
  // {
  //   id: 2,
  //   label: '常用',
  //   children: [
  //     {
  //       id: 3,
  //       label: '测试',
  //       mods: []
  //     }
  //   ]
  // }
]
export default modsList
