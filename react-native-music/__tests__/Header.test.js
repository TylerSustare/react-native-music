const React = require('React');
const ReactTestRenderer = require('react-test-renderer');
const Text = require('Text');
const { Header } = require('../components/Header');

describe('Header test', () => {
    it('renders correctly', (done) => {
        const instance = ReactTestRenderer.create(
            <Header />
        );

        expect(instance.toJSON()).toMatchSnapshot();
        done();
    });

    it('renders with header text', (done) => {
        const instance = ReactTestRenderer.create(
            <Header headerText={'test'} />
        );
        expect(instance.toJSON()).toMatchSnapshot();
        expect(instance.toJSON().children[0].children[0]).toBe('test');
        done();
    });
});