import React from 'react'
import Slide from '../Slide'
import SchoolYear from '../SchoolYear'
import { assistancePrograms, organization } from '../../../config'
import { toSentenceSerial } from 'underscore.string'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'

@observer
class BeforeYouBegin extends React.Component {
  constructor (props) {
    super(props)
    this.handleCheckItOut = this.handleCheckItOut.bind(this)
  }

  @observable showExtraContent = false

  handleCheckItOut() {
    this.showExtraContent = true
  }

  render() {
    const assistanceProgramList =
      toSentenceSerial(assistancePrograms, ', ', ' or ')

    return (
      <Slide header="Before you begin" id="before-you-begin">
        <p className="usa-font-lead">Before you begin, there are a few things you should know.</p>

        <p>
          If you received a &nbsp;
            <OverlayTrigger placement="top" overlay={
                <Tooltip id="letter">
                Check that the letter includes all the students in the household, because they are all eligible for free meals. If not, contact the school to correct the mistake. &nbsp;
                </Tooltip>
              }>
                <strong className="info-target">
                  letter
                  <Glyphicon glyph="question-sign" />
                </strong>
            </OverlayTrigger>
          &nbsp; from the school saying that your children were automatically approved (directly certified) for free meals for the <SchoolYear /> school year because someone in your household participates in {assistanceProgramList} then you do not need to submit an application.
        </p>

        <p>We need only one application for all the children in your household that attend {organization.name}.</p>
        <p><strong>Eligibility for free or reduced price school meal benefits is based on any one of these three things:</strong></p>

        <ul className="usa-content-list">
          <li>your total household income and size in the month the application is filled out, or the month before, or</li>
          <li>your child’s individual status as foster, homeless, migrant or runaway, or</li>
          <li>participation in an assistance program by any member of your household</li>
        </ul>

        <p>Your US citizenship or immigration status does not affect your eligibility for free and reduced price benefits.</p>

        <p>If you have questions at any point during the application, click the question mark icon to get help with the current section.</p>

        <h2>Things you'll need</h2>

        <p>Lastly, we compiled a list of the information you might need to complete the application. <a onClick={this.handleCheckItOut}>Check it out!</a></p>

        {!!this.showExtraContent &&
         <div>
           <p>If you have this information handy, it will make the application process fast and easy.</p>
           <ul className="usa-content-list">
             <li>If you participate in {assistanceProgramList} you will need to know your case number (not your card or account number).</li>
             <li>
               If you do not participate in any of the above assistance programs, you will need to report your total household income. In that case…
               <ul>
                 <li>if anyone in your house has a job, you may need to reference the earnings statements or pay stubs to report your gross income, which is different from the amount you actually receive in your paycheck.</li>
                 <li>if anyone receives Social Security or retirement benefits, you may need to gather the benefit statements to report the amount and frequency of the payments.</li>
                 <li>you may also need to reference other financial documents for additional sources of income.</li>
               </ul>
             </li>
           </ul>
           <p>Still not sure if you have everything you need? Don’t worry. The income section of the application contains detailed instructions and explanations about the sources of income you must include, and you can gather additional information then.</p>
         </div>
        }
      </Slide>
    )
  }
}

export default BeforeYouBegin
