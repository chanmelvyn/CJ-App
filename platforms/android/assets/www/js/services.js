angular.module('starter.services', [])

.factory('Home', function($filter) {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var today = [
    {id: 'Sunday', planet: 'Sun', gems: 'Amber, Yellow Topaz', image: 'img/Amber.jpg'},
    {id: 'Monday', planet: 'Moon', gems: 'Pearl, Moonstone', image: 'img/Pearl.jpg'},
    {id: 'Tuesday', planet: 'Mars', gems: 'Ruby, Garnet, Coral', image: 'img/Ruby.jpg'},
    {id: 'Wednesday', planet: 'Mercury', gems: 'Turquoise, Sapphire, Lapis-Lazuli', image: 'img/Turquoise.jpg'},
    {id: 'Thursday', planet: 'Jupiter', gems: 'Amethyst', image: 'img/Amethyst.jpg'},
    {id: 'Friday', planet: 'Venus', gems: 'Emerald, Malachite, Jade', image: 'img/Emerald.jpg'},
    {id: 'Saturday', planet: 'Saturn', gems: 'Diamond, Smoky Quartz, Opal', image: 'img/Diamond.jpg'}];
    var birthstone = [
    {id: 'Aries', date:'March 21 to April 19', planet: 'Mars', gems: 'Coral', image: 'img/Coral.jpg'},
    {id: 'Taurus', date:'April 20 to May 20', planet: 'Venus', gems: 'Diamond', image: 'img/Diamond.jpg'},
    {id: 'Gemini', date:'May 21 to June 20', planet: 'Mercury', gems: 'Emerald, Jade', image: 'img/Emerald.jpg'},
    {id: 'Cancer', date:'June 21 to July 22', planet: 'Moon', gems: 'Pearl', image: 'img/Amber.jpg'},
    {id: 'Leo', date:'July 23 to August 22', planet: 'Sun', gems: 'Ruby', image: 'img/Pearl.jpg'},
    {id: 'Virgo', date:'August 23 to September 22', planet: 'Mercury', gems: 'Emerald, Jade', image: 'img/Emerald.jpg'},
    {id: 'Libra', date:'September 23 to October 22', planet: 'Venus', gems: 'Diamond', image: 'img/Diamond.jpg'},
    {id: 'Scorpio', date:'October 23 to November 21', planet: 'Mars', gems: 'Coral', image: 'img/Coral.jpg'},
    {id: 'Sagittarius', date:'November 22 to December 21', planet: 'Jupiter', gems: 'Yellow Sapphire', image: 'img/YellowSapphire.jpg'},
    {id: 'Capricorn', date:'December 22 to January 19', planet: 'Saturn', gems: 'Blue Sapphire', image: 'img/BlueSapphire.jpg'},
    {id: 'Aquarius', date:'January 20 to February 18', planet: 'Saturn', gems: 'Blue Sapphire', image: 'img/BlueSapphire.jpg'},
    {id: 'Pisces', date:'February 19 to March 20', planet: 'Jupiter', gems: 'Yellow Sapphire', image: 'img/YellowSapphire.jpg'}];    
    var numerology = [
    {id:1, planet: 'Sun', element: 'Fire', gems: 'Citrine, Amber, Yellow Topaz', image: 'img/Citrine.jpg'},
    {id:2, planet: 'Moon', element: 'Water', gems: 'Pearl, Jade, Peridot', image: 'img/Pearl.jpg'},
    {id:3, planet: 'Jupiter', element: 'Fire', gems: 'Rose Quartz, Pink Sapphire', image: 'img/RoseQuartz.jpg'},
    {id:4, planet: 'Uranus', element: 'Earth', gems: 'Blue Sapphire', image: 'img/BlueSapphire.jpg'},
    {id:5, planet: 'Mercury', element: 'Air', gems: 'Diamond, Zircon', image: 'img/Diamond.jpg'},
    {id:6, planet: 'Venus', element: 'Air', gems: 'Turquoise, Blue Topaz', image: 'img/Turquoise.jpg'},
    {id:7, planet: 'Neptune', element: 'Water', gems: 'Moonstone, Opal', image: 'img/Moonstone.jpg'},
    {id:8, planet: 'Saturn', element: 'Earth', gems: 'Amethyst, Black Pearl, Black Diamond, Onyx', image: 'img/Amethyst.jpg'},
    {id:9, planet: 'Mars', element: 'Fire', gems: 'Ruby, Garnet, Coral, Red Jasper', image: 'img/Ruby.jpg'}];   
    return {
        allToday: function() {
            return today;
        },
        getToday: function() {
            DayOfWeek = $filter('date')(new Date(),'EEEE');
            for (var i = 0; i < today.length; i++) {
                if (today[i].id === DayOfWeek) {
                    return today[i];
                }
            }
        },
        allBirthstone: function() {
            return birthstone;
        },        
        getBirthstone: function(BirthDate) {
            if (BirthDate===null || BirthDate==="") BirthDate = 1;
            var date = new Date(parseInt(BirthDate));
            var DOB = date.getDate();
            var MOB = date.getMonth() + 1;
            if ((MOB===3 && DOB>=21) || (MOB===4 && DOB<=19)) Zodiac = "Aries";
            if ((MOB===4 && DOB>=20) || (MOB===5 && DOB<=20)) Zodiac = "Taurus";
            if ((MOB===5 && DOB>=21) || (MOB===6 && DOB<=20)) Zodiac = "Gemini";
            if ((MOB===6 && DOB>=21) || (MOB===7 && DOB<=22)) Zodiac = "Cancer";
            if ((MOB===7 && DOB>=23) || (MOB===8 && DOB<=22)) Zodiac = "Leo";
            if ((MOB===8 && DOB>=23) || (MOB===9 && DOB<=22)) Zodiac = "Virgo";
            if ((MOB===9 && DOB>=23) || (MOB===10 && DOB<=22)) Zodiac = "Libra";
            if ((MOB===10 && DOB>=23) || (MOB===11 && DOB<=21)) Zodiac = "Scorpio";
            if ((MOB===11 && DOB>=22) || (MOB===12 && DOB<=21)) Zodiac = "Sagittarius";
            if ((MOB===12 && DOB>=22) || (MOB===1 && DOB<=19)) Zodiac = "Capricorn";
            if ((MOB===1 && DOB>=20) || (MOB===2 && DOB<=18)) Zodiac = "Aquarius";
            if ((MOB===2 && DOB>=19) || (MOB===3 && DOB<=20)) Zodiac = "Pisces";
            for (var i = 0; i < birthstone.length; i++) {
                if (birthstone[i].id === Zodiac) {
                    return birthstone[i];    
                }
            }        
            return null;
        },
        allNumerology: function() {
            return numerology;
        },        
        getNumerology: function(BirthDate) {
            if (BirthDate===null || BirthDate==="") BirthDate = 1;
            var date = new Date(parseInt(BirthDate));
            var DOB = date.getDate();
            var MOB = date.getMonth() + 1;
            var YOB1 = date.getFullYear().toString().substr(0,2);
            var YOB2 = date.getFullYear().toString().substr(2,4);             
            while (DOB>9 && DOB!==11 && DOB!==22) {
                DOB = DOB.toString().split("");
                sum = 0;
                for (var i = 0; i < DOB.length; i++) { 
                    sum += parseInt(DOB[i],10);    
                }
                DOB = sum;
            }
            while (MOB>9 && MOB!==11) {
                MOB = MOB.toString().split("");
                sum = 0;
                for (var i = 0; i < MOB.length; i++) { 
                    sum += parseInt(MOB[i],10);    
                }
                MOB = sum;
            }
            Left = DOB + MOB;
            while (Left>9) {
                Left = Left.toString().split("");
                sum = 0;
                for (var i = 0; i < Left.length; i++) { 
                    sum += parseInt(Left[i],10);    
                }
                Left = sum;
            }

            if (YOB1>9 && YOB1!==11 && YOB1!==22 && YOB1!==33) {
                YOB1 = YOB1.toString().split("");
                sum = 0;
                for (var i = 0; i < YOB1.length; i++) { 
                    sum += parseInt(YOB1[i],10);    
                }
                YOB1 = sum;
            }
            if (YOB2>9 && YOB2!==11 && YOB2!==22 && YOB2!==33) {
                YOB2 = YOB2.toString().split("");
                sum = 0;
                for (var i = 0; i < YOB2.length; i++) { 
                    sum += parseInt(YOB2[i],10);    
                }
                YOB2 = sum;
            }
            Right = YOB1 + YOB2;

            LifePath = Left + Right;
            while (LifePath>9) {
                LifePath = LifePath.toString().split("");
                sum = 0;
                for (var i = 0; i < LifePath.length; i++) { 
                    sum += parseInt(LifePath[i],10);    
                }
                LifePath = sum;
            }        
            for (var i = 0; i < numerology.length; i++) {
                if (numerology[i].id === LifePath) {
                    return numerology[i]; 
                }
            }        
            return null;
        }
    }
})

.factory('Diamonds', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var diamonds = [{
        id: 0,
        title: 'Learn The Basics',
    },{
        id: 1,
        title: 'Selecting Quality Diamonds',
    },{
        id: 2,
        title: '1. Cut',
    },{
        id: 3,
        title: '2. Clarity',
    },{
        id: 4,
        title: '3. Color',
    },{
        id: 5,
        title: '4. Carat',
    },{
        id: 6,
        title: 'How to Tell a Real Diamond',
    },{
        id: 7,
        title: 'Finish',
    },{
        id: 8,
        title: 'Certificates',
    },{
        id: 9,
        title: 'The Ideal Proportions',
    }];

    return {
      all: function() {
        return diamonds;
      },
      get: function(diamondId) {
        for (var i = 0; i < diamonds.length; i++) {
          if (diamonds[i].id === parseInt(diamondId)) {
            return diamonds[i];
          }
        }
        return null;
      }
    }
})

.factory('Gemstones', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var gemstones = [{
        id: 0,
        title: 'Selecting Precious Gems',
        image: 'img/Gemstones.jpg',
        color: 'Look For : Light, Cut, Lighting, Synthetics & Imitations, Treatments and Color'
    },{
        id: 1,
        title: 'Amethyst',
        image: 'img/Amethyst.jpg',
        color: 'White, Purple, Green'
    },{
        id: 2,
        title: 'Aquamarine',
        image: 'img/Aquamarine.jpg',
        color: 'Light Green to Darker Green, Light Blue to Deeper Blue, White'
    },{
        id: 3,
        title: 'Diamond',
        image: 'img/Diamond.jpg',
        color: 'Blue White - Commercial White - Yellow; Fancy Yellow - Intense Yellow - Brown; Red - Pink - Blue - Green -Fancy;'
    },{
        id: 4,
        title: 'Emerald',
        image: 'img/Emerald.jpg',
        color: 'Deep Green, Light Green, Columbia Zambia'
    },{
        id: 5,
        title: 'Cat\'s Eye',
        image: 'img/CatsEye.jpg',
        color: 'Green, Honey, Light Brownish'
    },{
        id: 6,
        title: 'Garnet',
        image: 'img/Garnet.jpg',
        color: 'Hessonite Brown, Light Brown, Spessitine, Dark Brown, Garnet Red to Dark Red'
    },{
        id: 7,
        title: 'Kunzite',
        image: 'img/Kunzite.jpg',
        color: 'Deep Pink, Light Pink'
    },{
        id: 8,
        title: 'Moonstone',
        image: 'img/Moonstone.jpg',
        color: 'White, Orange, Blue Sheen'
    },{
        id: 9,
        title: 'Opal',
        image: 'img/Opal.jpg',
        color: 'Black, Blue, Fire, Crystal, Milk'
    },{
        id: 10,
        title: 'Pearl',
        image: 'img/Pearl.jpg',
        color: 'Black, Gray, Golden, Yellow, White'
    },{
        id: 11,
        title: 'Peridot',
        image: 'img/Peridot.jpg',
        color: 'Dark Green, Light Green'
    },{
        id: 12,
        title: 'Ruby',
        image: 'img/Ruby.jpg',
        color: 'White, Purple Green'
    },{
        id: 13,
        title: 'Sapphire',
        image: 'img/BlueSapphire.jpg',
        color: 'Pigeon Blood Red, Red'
    }];

    return {
      all: function() {
        return gemstones;
      },
      get: function(gemstoneId) {
        for (var i = 0; i < gemstones.length; i++) {
          if (gemstones[i].id === parseInt(gemstoneId)) {
            return gemstones[i];
          }
        }
        return null;
      }
    }
})

.factory('Applications', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var applications = [{
        id: 0,
        title: 'Uses of Gemstones',
    },{
        id: 1,
        title: 'Gems and Planets',
    },{
        id: 2,
        title: 'Signs and Birthstones',
    },{
        id: 3,
        title: 'Gemstones for the Week',
    },{
        id: 4,
        title: 'Gemstones and Numerology',
    },{
        id: 5,
        title: 'Colors and Meanings',
    },{
        id: 6,
        title: 'Gems, Healing and Wellness',
    },{
        id: 7,
        title: 'Conclusion',
    }];

    return {
      all: function() {
        return applications;
      },
      get: function(applicationId) {
        for (var i = 0; i < applications.length; i++) {
          if (applications[i].id === parseInt(applicationId)) {
            return applications[i];
          }
        }
        return null;
      }
    }
});
