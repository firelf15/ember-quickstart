import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return['Daisy', 'Abby', 'Hemmingway', 'Greggor', 'Luna', 'Sam', 'Sasha']
  }
});
