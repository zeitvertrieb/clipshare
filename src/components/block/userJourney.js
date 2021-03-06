import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Row, Col } from 'react-bootstrap'

import UserJourneyImg01 from '../../assets/sketch/support-notes-colour.svg'
import UserJourneyImg02 from '../../assets/sketch/holding-phone-colour.svg'
import UserJourneyImg03 from '../../assets/sketch/mobile-article-colour.svg'
import UserJourneyImg04 from '../../assets/sketch/content-man-colour.svg'

const UserJourney = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xs="12" sm="9" md="8" className="mr-auto mb-4">
            <h2 className="h3">
              <strong><FormattedMessage id="block.userJourney.emphasize" /></strong>
              {" "}
              <FormattedMessage id="block.userJourney.text" />
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xs="6" md="4" lg="4" className="m-auto mb-4 p-4">
            <UserJourneyImg01 />
          </Col>
          <Col xs="12" md="6" lg="5" className="m-auto mb-4">
            <p className="lead">
              <FormattedMessage id="block.userJourney.one" />
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="6" md="4" lg="4" className="m-auto mb-4 p-4 order-md-2">
            <UserJourneyImg02 />
          </Col>
          <Col xs="12" md="6" lg="5" className="m-auto mb-4 order-md-1">
            <p className="lead">
              <FormattedMessage id="block.userJourney.two" />
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="6" md="4" lg="4" className="m-auto mb-4 p-4">
            <UserJourneyImg03 />
          </Col>
          <Col xs="12" md="6" lg="5" className="m-auto mb-4">
            <p className="lead">
              <FormattedMessage id="block.userJourney.three" />
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="6" md="4" lg="4" className="m-auto mb-4 p-4 order-md-2">
            <UserJourneyImg04 />
          </Col>
          <Col xs="12" md="6" lg="5" className="m-auto mb-4 order-md-1">
            <p className="lead">
              <FormattedMessage id="block.userJourney.four" />
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default injectIntl(UserJourney)
