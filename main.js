const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies. Like wayyy too much.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHSm6vblInu8urEOUi7n7qaLIgyWh4UORzw&s",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally, Barks the opposite amount.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNhYhzz4ibGVPwKfvBYt00D3fL1doxejxGWA&s"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories from all.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN95uz6T5jYbka6Q_fl7Vkgz2qffi9EJ9utw&s"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms at any time.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZwGiq1_kbstnb4UkU_yQcScpL5cgx6pfbA&s"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert. Anytime. Anyplace.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "This is the most adorable cat every and yeah.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3lnyW3HNqNc-NK9W0U4wC4-86LJlwI6xOnQ&s"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Freaks out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3rBDfVpYqUcp0tvqbjuTrCeWLwBkcS0PUg&s"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar but terrible with a real one.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxuaRVJ3quK95G_zPjJK_owzNqO9m4LXkPQ&s"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories from all.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssJoERRruFweV0yUORpfpRGtLdvHUBwMAbA&s"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours only on Thursdays.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZusasdiY0Jups_USql2LsPc_fABra6u6kg&s"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove and a Gameboy.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8bUCNm-yOXYiRDX-s8GMZVcnfospIyrfDA&s"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cVNYzI_5e3BY73zcfVFTVRnMp9Wt67_jBg&s"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine with a bunch of smelly cheese.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVja4wi9MUv4RWRpTb2mFJ-SSgJCQbii8hdg&s"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs. Soon to be 5.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoydR_NW4es4l_AvpthZxzGZw39nuMF53KMA&s"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself like a really weird amount in public.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong until he is actually wrong.",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to. He never has to dance.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFuDAqMbCksz4DmYS-o9BWDDrbLzdqsHyUOw&s"
    }
  ];



  // Sets renderToDom, which is needed to render the array in the first place.
  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };
  
  // Gets the cards on the DOM and sets cardOnDom for many future uses.
  const cardsOnDom = (array) => {
    let domString = "";
    for (const pet of array) {

      // Changes footer class of card depending on pet.type string.
      const petFooter =
      // ? tests if first part of statement is true, if so then changes footer class to new id.
      pet.type === "cat" ? "catFooter" :
      pet.type === "dog" ? "dogFooter" :
      pet.type === "dino" ? "dinoFooter" :
      "";

      // Adds to domString varible.
      domString += 
        `<div class="card" style="width: 18rem;">
          <h5 class="card-title">${pet.name}</h5>
          <img src="${pet.imageUrl}" class="img-thumbnail" alt="...">
          <h6 class="card-body1">${pet.color}</h6>
          <div class="card-body2">
            <p>${pet.specialSkill}</p>
          </div>
          <div class="card-footer ${petFooter}" id="footer" dataType="${pet.type}">${pet.type}</div>
        <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
        </div>`;
    }
  
    // Renders cards in the first place by adding domString to html inside of #app div.
    renderToDom("#app", domString);
  };
  
  // Sets filter for filter pet buttons at bottom of page.
  const filter = (array, typeString) => {

    // Creates new array with conditions that the filter follows.
    const petArray = [];
  
    // Sets functionality for the filter.
    for (const pet of array) {
      // Tests for if pet.type === to conditioned typeString.
      if (pet.type === typeString) {
        // Pushes specified pets to petArray.
        petArray.push(pet);
      }
    }
  
    // Utility to finalzie petArray, here for if needed anywhere else ,must have this at the bottom of all filters.
    return petArray;
  };
  
  // Get all the cards to render on the DOM.
  cardsOnDom(pets);

  // Sets variable form and assigns it to the entire form of html.
  const form = document.querySelector("form");

  // Creates new pet varialbe and creates an event inside.
  const createPet = (e) => {

    // Needed for every form.
    e.preventDefault();

    // Declares what will be part of created pet.
    const newPetObj = {
      id: pets.length + 1,
      name: document.querySelector("#name").value,
      imageUrl: document.querySelector("#image").value,
      color: document.querySelector("#favoriteColor").value,
      specialSkill: document.querySelector("#specialSkill").value,
      type: document.querySelector("#petType").value,
    }

    // Pushes created pet to "new" array.
    pets.push(newPetObj);

    // Pushes "new" array to DOM.
    cardsOnDom(pets);

    // Must have when changing form on-site.
    form.reset();
  }

  // Adds functionality to the create pet button.
  form.addEventListener('submit', createPet);
  
  // Creates app variable and assigns it to #app div. ??
  const app = document.querySelector('#app');
  
  // When delete button is clicked, and (e), the event, occurs, this code runs.
  app.addEventListener('click', (e) => {
    // Tests for if targeted delete button has delete in the domString, (all cards should).
    if (e.target.id.includes('delete')) {
      // , is needed to be the starting position, id is your end poistion.
      // split("--") = calls on your -- in the domString to target where the event occurs.
      const [, id] = e.target.id.split('--');
      // Assigning clicked button index. || Taking string and converting to number.
      const index = pets.findIndex((e) => e.id === Number(id));
      // Deletes index of card selected. || , 1 = how many items in array you want to splice.
      pets.splice(index, 1);
      // Reapplys cards with "new" array to DOM. 
      cardsOnDom(pets);  
    }
  });
  
  // Creates variable that targets the filter pet buttons on the DOM.
  const showCatsButton = document.querySelector("#cat");
  const showDogsButton = document.querySelector("#dog");
  const showDinosButton = document.querySelector("#dino");
  const showAllButton = document.querySelector("#resetbtn");
  
  // Adds all pets button to show all "pets" in the array.
  showAllButton.addEventListener("click", () => {
    cardsOnDom(pets);
  });
  
  // Adds funtion to "cats" button to filter only cats on the array.
  showCatsButton.addEventListener("click", () => {
    // Creates array that contains filtered pets with typeString === to "cat".
    const catPets = filter(pets, "cat");
    // Displays new filtered array on the DOM.
    cardsOnDom(catPets);
  });
  
  // Adds funtion to "dinos" button to filter only dinos on the array.
  showDogsButton.addEventListener("click", () => {
    const dogPets = filter(pets, "dog");
    cardsOnDom(dogPets);
  });

  // Adds funtion to "dinos" button to filter only dinos on the array.
  showDinosButton.addEventListener("click", () => {
    const dinoPets = filter(pets, "dino");
    cardsOnDom(dinoPets);
  });
  


  

  // Some past used code, and testing code for footer color change.


  // const catPetsColor = filter(pets, "cat") 
  //   let domString2 = "";
  //   if (pets.type === "cat") {
  //     // domString2 += ``
  //     document.querySelector("#cardBody3").style.backgroundColor = "lightblue" ;
  //     // document.getElementById("card-body3").style.backgroundColor = "lightblue";
  //   }
  //   // renderToDom("#color", domString2);
  
  
  
  // function cPetsColor() {
  //   if (pets.type === "cat") {
  //     document.getElementById("type").style.backgroundColor = "lightblue";
  //   // document.querySelector("#cardBody3").style.backgroundColor = "lightblue" ;
  //   }
  // }

  // cPetsColor();

    // const targetingApp = document.querySelector("#app");

  
  
    // let domString = "";
  // for (const pet of pets) {
  //   domString += `<div class="card" style="width: 18rem;">
  //     <h5 class="card-title">${pet.name}</h5>
  //       <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
  //       <div class="card-body1">
  //         <p class="card-text1">${pet.color}</p>
  //       </div>
  //       <div class="card-body2">
  //         <p class="card-text2">${pet.specialSkill}</p>
  //       </div>
  //       <div class="card-body3" id="cardBody3">
  //         <p class="card-text3">${pet.type}</p>
  //       </div>
  //     </div>`;
  //     renderToDom("#app", domString);
  // };

  // targetingApp.innerHTML = domString;

  // function catType() {
  //   if (pets.type === "cat") {
  //     document.getElementById("card-body3").style.backgroundColor = "lightblue";
  //     document.querySelector("#cardBody3").style.backgroundColor = "lightblue" ;
  //   }
  // }

  // catType();


  // const applyFooterStyles = () => {
  //   const cardFooters = document.querySelectorAll('.card-footer');
  
  //   cardFooters.forEach((footer) => {
  //     const petType = footer.getAttribute('dataType');
      
  //     if (petType === 'cat') {
  //       footer.style.backgroundColor = 'lightblue';
  //     } else if (petType === 'dog') {
  //       footer.style.backgroundColor = 'green';
  //     } else if (petType === 'dino') {
  //       footer.style.backgroundColor = 'orange';
  //     }
  //   });
  // };
