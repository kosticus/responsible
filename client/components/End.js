import { Panel } from 'react-bootstrap';

const title = (<h3>Thank You for Saving Lives</h3>);

export function End() {
  // jscs:disable
  var facts = [`On average, a drunk driver will drive 80 times under the influence before their
  first arrest.`, `Every 51 minutes in America, someone is killed in a drunk driving crash. That
  equates to 27 people every day.`, `Someone is injured in a drunk driving incident every 120
  seconds.`, `An estimated 32% of fatal car crashes involve an intoxicated driver or pedestrian.`,
  `Motorcycle riders are nearly twice as likely to be driving while drunk than passenger car
  drivers.`, `The highest percentage of drivers in fatal crashes who have BAC levels of .08 or
  higher is for drivers ages 21 to 24.`, `One in 3 people will be involved in an alcohol related
  crash in their lifetime.`, `Drunk driving costs each adult in this country almost $500 per
  year.`, `Drinking and driving is more prevalent during late overnight hours (1am to 3am). At
  that time, approximately 4.8% of all drivers are over the legal alcohol limit. That’s compared
  to just 0.2% during the 9:30am to 11:30am morning hours.`, `Every minute, one person is injured
  from an  alcohol-related crash.`, `The rate of alcohol impairment among drivers involved in fatal
   crashes was four times higher at night than during the day – 36% versus 9%.`, `The latest drunk
   driving facts show the number of drunk drivers in the United States has decreased an estimate
   71% since 1970.`, `In 2013, 28.7 million people admitted to driving under the  influence of
  alochol - that is more than the population state of Texas.`, `To reach a BAC level of .08 g/dL, a
   man weighing approximately 170 pounds would need to consume four standard drinks in one hour on
   an empty stomach. A woman weighing about 140 pounds would  need to consume three drinks in one
   hour.`, `It takes approximately six hours after drinking for the body to completely eliminate
   alcohol from its system with a BAC level of .08 g/dL.`, `A driver with a BAC of .08  g/dL is 11
    times more likely to be in a fatal  accident than a driver who has consumed no alcohol.`,
  `Nearly 75% of drunk drivers involved in fatal collisions are not wearing their safety belts.`,
  `Men are about twice as likely as women to drive under the influence of alcohol and to be
  involved in a fatal  collision.`, `The estimated annual cost of crashes involving alcohol
  impairment is $37 billion.`, `There are more alcohol-related crashes on weekends versus
  weekdays.`, `Victims  of crashes and people other than the negligent driver end up paying 63% of
  the total cost  of alcohol-related crashes.`]


  // jscs:enable
  const randomIndex = Math.floor(Math.random() * facts.length);
  return (
      <div className='duiFacts'>
        <Panel header={title}>
          {facts[randomIndex]}
        </Panel>
      </div>
  );
};

