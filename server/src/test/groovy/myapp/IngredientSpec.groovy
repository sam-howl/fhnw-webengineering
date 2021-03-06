package myapp

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class IngredientSpec extends Specification implements DomainUnitTest<Ingredient> {

    def setup() {
    }

    def cleanup() {
    }

    void 'test name cannot be null'() {
        when:
        domain.name = null

        then:
        !domain.validate(['name'])
        domain.errors['name'].code == 'nullable'
    }

    void 'test name cannot be blank'() {
        when:
        domain.name = ''

        then:
        !domain.validate(['name'])
    }

    void 'test name can have a maximum of 255 characters'() {
        when: 'for a string of 256 characters'
        String str = 'a' * 256
        domain.name = str

        then: 'name validation fails'
        !domain.validate(['name'])
        domain.errors['name'].code == 'maxSize.exceeded'

        when: 'for a string of 256 characters'
        str = 'a' * 255
        domain.name = str

        then: 'name validation passes'
        domain.validate(['name'])
    }

    void 'test unit can be null'() {
        when:
        domain.unit = null

        then:
        domain.validate(['unit'])
    }

    void 'test unit cannot be blank'() {
        when:
        domain.unit = ''

        then:
        !domain.validate(['unit'])
    }

    void 'test unit can have a maximum of 255 characters'() {
        when: 'for a string of 256 characters'
        String str = 'a' * 256
        domain.unit = str

        then: 'unit validation fails'
        !domain.validate(['unit'])
        domain.errors['unit'].code == 'maxSize.exceeded'

        when: 'for a string of 256 characters'
        str = 'a' * 255
        domain.unit = str

        then: 'unit validation passes'
        domain.validate(['unit'])
    }

    void 'test amount cannot be null'() {
        when:
        domain.amount = null

        then:
        !domain.validate(['amount'])
        domain.errors['amount'].code == 'nullable'
    }

    void 'test amount cannot be blank'() {
        when:
        domain.name = ''

        then:
        !domain.validate(['name'])
    }
}
