import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JSDOM } from 'jsdom'

Enzyme.configure({ adapter: new Adapter() })

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

function copyProps(src: any, target: any) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .reduce(
            (result, prop) => ({
                ...result,
                [prop]: Object.getOwnPropertyDescriptor(src, prop)
            }),
            {}
        )
    Object.defineProperties(target, props)
}

// @ts-ignore
global.window = window
// @ts-ignore
global.document = window.document
// @ts-ignore
global.window.localStorage = {}
// @ts-ignore
global.window.sessionStorage = {}
// @ts-ignore
global.window.fetch = jest.fn()
Object.assign(window, { Date: global.Date })

copyProps(window, global)
