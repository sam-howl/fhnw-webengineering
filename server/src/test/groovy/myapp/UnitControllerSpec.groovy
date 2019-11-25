package myapp

import grails.testing.web.controllers.ControllerUnitTest
import spock.lang.Specification

class UnitControllerSpec extends Specification implements ControllerUnitTest<UnitController> {

    def setup() {
    }

    def cleanup() {
    }

    void "test something"() {
        expect:"fix me"
        true == false
    }
}