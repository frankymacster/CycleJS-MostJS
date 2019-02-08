import {div, label, input} from '@cycle/dom'
import isolate from '@cycle/isolate'

const intent = domSource => domSource.DOM.select(`.name`).events(`input`)
const model = intent$ => intent$.map(
  userInput => userInput.target.value).startWith(``)
const view = model$ => model$.map(
  userData =>
    div(`.name`, [
      label(`${userData}`),
      input(),
    ])
)

function UserInput(sources) {
  return {
    DOM: view(model(intent(sources))),
  }
}

export default sources => isolate(UserInput)(sources)
