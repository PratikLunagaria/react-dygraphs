import ModuleDefaultComponent from '../src';
import {StarterComponent} from '../src';

describe('module entry point', function() {
    it('should be a function', function() {
        expect(ModuleDefaultComponent).to.be.a('function');
    });
    it('should be StarterComponent', function() {
        expect(ModuleDefaultComponent).to.equal(StarterComponent);
    });
});

const testsContext = require.context('../src/components/', true, /index\.jsx?$/);

testsContext.keys().forEach(testsContext);

const componentsContext = require.context('../src/components/', true, /index\.jsx?$/);

componentsContext.keys().forEach(componentsContext);