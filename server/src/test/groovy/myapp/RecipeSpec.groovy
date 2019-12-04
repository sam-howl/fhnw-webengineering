package myapp

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class RecipeSpec extends Specification implements DomainUnitTest<Recipe> {

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

    void 'test description cannot be null'() {
        when:
        domain.description = null

        then:
        !domain.validate(['description'])
        domain.errors['description'].code == 'nullable'
    }

    void 'test description cannot be blank'() {
        when:
        domain.description = ''

        then:
        !domain.validate(['description'])
    }

    void 'test description can have a maximum of 255 characters'() {
        when: 'for a string of 256 characters'
        String str = 'a' * 256
        domain.description = str

        then: 'description validation fails'
        !domain.validate(['description'])
        domain.errors['description'].code == 'maxSize.exceeded'

        when: 'for a string of 256 characters'
        str = 'a' * 255
        domain.description = str

        then: 'description validation passes'
        domain.validate(['description'])
    }

    void 'category description cannot be null'() {
        when:
        domain.category = null

        then:
        !domain.validate(['category'])
        domain.errors['category'].code == 'nullable'
    }

    void 'test category cannot be blank'() {
        when:
        domain.category = ''

        then:
        !domain.validate(['category'])
    }

    void 'test category can have a maximum of 255 characters'() {
        when: 'for a string of 256 characters'
        String str = 'a' * 256
        domain.category = str

        then: 'category validation fails'
        !domain.validate(['category'])
        domain.errors['category'].code == 'maxSize.exceeded'

        when: 'for a string of 256 characters'
        str = 'a' * 255
        domain.category = str

        then: 'category validation passes'
        domain.validate(['category'])
    }

    void 'minutesToMake description cannot be null'() {
        when:
        domain.minutesToMake = null

        then:
        !domain.validate(['minutesToMake'])
        domain.errors['minutesToMake'].code == 'nullable'
    }

    void 'pictureUrl description can be null'() {
        when:
        domain.pictureUrl = null

        then:
        domain.validate(['pictureUrl'])
    }

    void 'test pictureUrl cannot be blank'() {
        when:
        domain.pictureUrl = ''

        then:
        !domain.validate(['pictureUrl'])
    }

    void 'test pictureUrl can have a maximum of 255 characters'() {
        when: 'for a string of 256 characters'
        String str = 'a' * 256
        domain.pictureUrl = str

        then: 'pictureUrl validation fails'
        !domain.validate(['pictureUrl'])
        domain.errors['pictureUrl'].code == 'maxSize.exceeded'

        when: 'for a string of 256 characters'
        str = 'a' * 255
        domain.pictureUrl = str

        then: 'pictureUrl validation passes'
        domain.validate(['pictureUrl'])
    }
}
