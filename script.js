function showChoices(option) {
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = ''; // Clear previous choices
  
    // Generate choices based on the selected option
    switch (option) {
      case 'option1':
        choicesDiv.innerHTML = '<div class="non-semantic-protector"> \
        <h1 class="ribbon"> \
            <strong class="ribbon-content">Breakfast</strong> \
         </h1> \
     </div> \
    <div class="container text-center"> \
        <div class="row" style="display: flex; align-items: center;"> \
          <div class="col"> \
           <h5>Omelette</h5> \
          </div> \
          <div class="col"> \
            <h5>10$</h5> \
          </div> \
          <div class="col"> \
            <img src="/images/omelette.jpg" alt="" width="175" height="175"> \
          </div> \
        </div> \
        <hr class="solid"> \
          <div class="row" style="display: flex; align-items: center;"> \
              <div class="col"> \
               <h5>French Toast</h5> \
              </div> \
              <div class="col"> \
                <h5>10$</h5> \
              </div> \
              <div class="col"> \
                <img src="/images/french-toast.jpg" alt="" width="175" height="175"> \
              </div> \
            </div> \
            <hr class="solid"> \
            <div class="row" style="display: flex; align-items: center;"> \
                <div class="col"> \
                 <h5>Pancake</h5> \
                </div> \
                <div class="col"> \
                  <h5>10$</h5> \
                </div> \
                <div class="col"> \
                  <img src="/images/pancake.jpg" alt="" width="175" height="175"> \
                </div> \
              </div> \
      </div>';
        break;
      case 'option2':
        choicesDiv.innerHTML = '<div class="non-semantic-protector"> \
        <h1 class="ribbon"> \
            <strong class="ribbon-content">Soups</strong> \
         </h1> \
     </div> \
    <div class="container text-center"> \
        <div class="row" style="display: flex; align-items: center;"> \
          <div class="col"> \
           <h5>Garlic Soup</h5> \
          </div> \
          <div class="col"> \
            <h5>10$</h5> \
          </div> \
          <div class="col"> \
            <img src="/images/garlic-soup.jpg" alt="" width="175" height="175"> \
          </div> \
        </div> \
        <hr class="solid"> \
        <div class="row" style="display: flex; align-items: center;"> \
            <div class="col"> \
             <h5>Lentil Soup</h5> \
            </div> \
            <div class="col"> \
              <h5>10$</h5> \
            </div> \
            <div class="col"> \
              <img src="/images/lentil-soup.jpg" alt="" width="175" height="175"> \
            </div> \
          </div> \
          <hr class="solid"> \
          <div class="row" style="display: flex; align-items: center;"> \
              <div class="col"> \
               <h5>Tomato Soup</h5> \
              </div> \
              <div class="col"> \
                <h5>10$</h5> \
              </div> \
              <div class="col"> \
                <img src="/images/tomato-soup.jpg" alt="" width="175" height="175"> \
              </div> \
            </div> \
      </div>';
        break;
      case 'option3':
        choicesDiv.innerHTML = '<div class="non-semantic-protector"> \
        <h1 class="ribbon"> \
            <strong class="ribbon-content">Salads</strong> \
         </h1> \
     </div> \
    <div class="container text-center"> \
        <div class="row" style="display: flex; align-items: center;"> \
          <div class="col"> \
           <h5>Salad 1</h5> \
          </div> \
          <div class="col"> \
            <h5>10$</h5> \
          </div> \
          <div class="col"> \
            <img src="/images/salad.jpg" alt="" width="175" height="175"> \
          </div> \
        </div> \
        <hr class="solid"> \
        <div class="row" style="display: flex; align-items: center;"> \
            <div class="col"> \
             <h5>Salad 2</h5> \
            </div> \
            <div class="col"> \
              <h5>10$</h5> \
            </div> \
            <div class="col"> \
              <img src="/images/salad.jpg" alt="" width="175" height="175"> \
            </div> \
          </div> \
          <hr class="solid"> \
          <div class="row" style="display: flex; align-items: center;"> \
              <div class="col"> \
               <h5>Salad 3</h5> \
              </div> \
              <div class="col"> \
                <h5>10$</h5> \
              </div> \
              <div class="col"> \
                <img src="/images/salad.jpg" alt="" width="175" height="175"> \
              </div> \
            </div> \
      </div>';
        break;
      case 'option4':
        choicesDiv.innerHTML = '<div class="non-semantic-protector"> \
        <h1 class="ribbon"> \
            <strong class="ribbon-content">Burgers</strong> \
         </h1> \
     </div> \
    <div class="container text-center"> \
        <div class="row" style="display: flex; align-items: center;"> \
          <div class="col"> \
           <h5>Burger 1</h5> \
          </div> \
          <div class="col"> \
            <h5>10$</h5> \
          </div> \
          <div class="col"> \
            <img src="/images/12.jpg" alt="" width="175" height="175"> \
          </div> \
        </div> \
        <hr class="solid"> \
        <div class="row" style="display: flex; align-items: center;"> \
            <div class="col"> \
             <h5>Burger 2</h5> \
            </div> \
            <div class="col"> \
              <h5>10$</h5> \
            </div> \
            <div class="col"> \
              <img src="/images/12.jpg" alt="" width="175" height="175"> \
            </div> \
          </div> \
          <hr class="solid"> \
          <div class="row" style="display: flex; align-items: center;"> \
              <div class="col"> \
               <h5>Burger 3</h5> \
              </div> \
              <div class="col"> \
                <h5>10$</h5> \
              </div> \
              <div class="col"> \
                <img src="/images/12.jpg" alt="" width="175" height="175"> \
              </div> \
            </div> \
      </div>';
        break;
      case 'option5':
        choicesDiv.innerHTML = '<div class="non-semantic-protector"> \
        <h1 class="ribbon"> \
            <strong class="ribbon-content">Pastas</strong> \
         </h1> \
     </div> \
    <div class="container text-center"> \
        <div class="row" style="display: flex; align-items: center;"> \
          <div class="col"> \
           <h5>Pasta 1</h5> \
          </div> \
          <div class="col"> \
            <h5>10$</h5> \
          </div> \
          <div class="col"> \
            <img src="/images/11.jpg" alt="" width="175" height="175"> \
          </div> \
        </div> \
        <hr class="solid"> \
        <div class="row" style="display: flex; align-items: center;"> \
            <div class="col"> \
             <h5>Pasta 2</h5> \
            </div> \
            <div class="col"> \
              <h5>10$</h5> \
            </div> \
            <div class="col"> \
              <img src="/images/11.jpg" alt="" width="175" height="175"> \
            </div> \
          </div> \
          <hr class="solid"> \
          <div class="row" style="display: flex; align-items: center;"> \
              <div class="col"> \
               <h5>Pasta 3</h5> \
              </div> \
              <div class="col"> \
                <h5>10$</h5> \
              </div> \
              <div class="col"> \
                <img src="/images/11.jpg" alt="" width="175" height="175"> \
              </div> \
            </div> \
      </div>';
        break;
      case 'option6':
        choicesDiv.innerHTML = '<div class="non-semantic-protector"> \
        <h1 class="ribbon"> \
            <strong class="ribbon-content">Wraps</strong> \
         </h1> \
     </div> \
    <div class="container text-center"> \
        <div class="row" style="display: flex; align-items: center;"> \
          <div class="col"> \
           <h5>Wrap 1</h5> \
          </div> \
          <div class="col"> \
            <h5>10$</h5> \
          </div> \
          <div class="col"> \
            <img src="/images/wrap.jpg" alt="" width="175" height="175"> \
          </div> \
        </div> \
        <hr class="solid"> \
        <div class="row" style="display: flex; align-items: center;"> \
            <div class="col"> \
             <h5>Wrap 2</h5> \
            </div> \
            <div class="col"> \
              <h5>10$</h5> \
            </div> \
            <div class="col"> \
              <img src="/images/wrap.jpg" alt="" width="175" height="175"> \
            </div> \
          </div> \
          <hr class="solid"> \
          <div class="row" style="display: flex; align-items: center;"> \
              <div class="col"> \
               <h5>Wrap 3</h5> \
              </div> \
              <div class="col"> \
                <h5>10$</h5> \
              </div> \
              <div class="col"> \
                <img src="/images/wrap.jpg" alt="" width="175" height="175"> \
              </div> \
            </div> \
      </div>';
        break;
      case 'option7':
        choicesDiv.innerHTML = '<div class="non-semantic-protector"> \
        <h1 class="ribbon"> \
            <strong class="ribbon-content">Pizzas</strong> \
         </h1> \
     </div> \
    <div class="container text-center"> \
        <div class="row" style="display: flex; align-items: center;"> \
          <div class="col"> \
           <h5>Pizza 1</h5> \
          </div> \
          <div class="col"> \
            <h5>10$</h5> \
          </div> \
          <div class="col"> \
            <img src="/images/13.jpg" alt="" width="175" height="175"> \
          </div> \
        </div> \
        <hr class="solid"> \
        <div class="row" style="display: flex; align-items: center;"> \
            <div class="col"> \
             <h5>Pizza 2</h5> \
            </div> \
            <div class="col"> \
              <h5>10$</h5> \
            </div> \
            <div class="col"> \
              <img src="/images/13.jpg" alt="" width="175" height="175"> \
            </div> \
          </div> \
          <hr class="solid"> \
          <div class="row" style="display: flex; align-items: center;"> \
              <div class="col"> \
               <h5>Pizza 3</h5> \
              </div> \
              <div class="col"> \
                <h5>10$</h5> \
              </div> \
              <div class="col"> \
                <img src="/images/13.jpg" alt="" width="175" height="175"> \
              </div> \
            </div> \
      </div>';
        break;
      case 'option8':
        choicesDiv.innerHTML = '<div class="non-semantic-protector"> \
        <h1 class="ribbon"> \
            <strong class="ribbon-content">Main Dishes</strong> \
         </h1> \
     </div> \
    <div class="container text-center"> \
        <div class="row" style="display: flex; align-items: center;"> \
          <div class="col"> \
           <h5>Steak 1</h5> \
          </div> \
          <div class="col"> \
            <h5>10$</h5> \
          </div> \
          <div class="col"> \
            <img src="/images/6.jpg" alt="" width="175" height="175"> \
          </div> \
        </div> \
        <hr class="solid"> \
        <div class="row" style="display: flex; align-items: center;"> \
            <div class="col"> \
             <h5>Steak 2</h5> \
            </div> \
            <div class="col"> \
              <h5>10$</h5> \
            </div> \
            <div class="col"> \
              <img src="/images/6.jpg" alt="" width="175" height="175"> \
            </div> \
          </div> \
          <hr class="solid"> \
          <div class="row" style="display: flex; align-items: center;"> \
              <div class="col"> \
               <h5>Steak 3</h5> \
              </div> \
              <div class="col"> \
                <h5>10$</h5> \
              </div> \
              <div class="col"> \
                <img src="/images/6.jpg" alt="" width="175" height="175"> \
              </div> \
            </div> \
      </div>';
        break;
      case 'option9':
        choicesDiv.innerHTML = '<div class="non-semantic-protector"> \
        <h1 class="ribbon"> \
            <strong class="ribbon-content">Desserts</strong> \
         </h1> \
     </div> \
    <div class="container text-center"> \
        <div class="row" style="display: flex; align-items: center;"> \
          <div class="col"> \
           <h5>Dessert 1</h5> \
          </div> \
          <div class="col"> \
            <h5>10$</h5> \
          </div> \
          <div class="col"> \
            <img src="/images/dessert.jpg" alt="" width="175" height="175"> \
          </div> \
        </div> \
        <hr class="solid"> \
        <div class="row" style="display: flex; align-items: center;"> \
            <div class="col"> \
             <h5>Dessert 2</h5> \
            </div> \
            <div class="col"> \
              <h5>10$</h5> \
            </div> \
            <div class="col"> \
              <img src="/images/dessert.jpg" alt="" width="175" height="175"> \
            </div> \
          </div> \
          <hr class="solid"> \
          <div class="row" style="display: flex; align-items: center;"> \
              <div class="col"> \
               <h5>Dessert 3</h5> \
              </div> \
              <div class="col"> \
                <h5>10$</h5> \
              </div> \
              <div class="col"> \
                <img src="/images/dessert.jpg" alt="" width="175" height="175"> \
              </div> \
            </div> \
      </div>';
        break;
      case 'option10':
        choicesDiv.innerHTML = '<div class="non-semantic-protector"> \
        <h1 class="ribbon"> \
            <strong class="ribbon-content">Cold Drinks</strong> \
         </h1> \
     </div> \
    <div class="container text-center"> \
        <div class="row" style="display: flex; align-items: center;"> \
          <div class="col"> \
           <h5>Cold Drink 1</h5> \
          </div> \
          <div class="col"> \
            <h5>10$</h5> \
          </div> \
          <div class="col"> \
            <img src="/images/drink.jpg" alt="" width="175" height="175"> \
          </div> \
        </div> \
        <hr class="solid"> \
        <div class="row" style="display: flex; align-items: center;"> \
            <div class="col"> \
             <h5>Cold Drink 2</h5> \
            </div> \
            <div class="col"> \
              <h5>10$</h5> \
            </div> \
            <div class="col"> \
              <img src="/images/drink.jpg" alt="" width="175" height="175"> \
            </div> \
          </div> \
          <hr class="solid"> \
          <div class="row" style="display: flex; align-items: center;"> \
              <div class="col"> \
               <h5>Cold Drink 3</h5> \
              </div> \
              <div class="col"> \
                <h5>10$</h5> \
              </div> \
              <div class="col"> \
                <img src="/images/drink.jpg" alt="" width="175" height="175"> \
              </div> \
            </div> \
      </div>';
        break;
      case 'option11':
            choicesDiv.innerHTML = '<div class="non-semantic-protector"> \
            <h1 class="ribbon"> \
                <strong class="ribbon-content">Non Alcoholic Cocktails</strong> \
             </h1> \
         </div> \
        <div class="container text-center"> \
            <div class="row" style="display: flex; align-items: center;"> \
              <div class="col"> \
               <h5>Cocktail 1</h5> \
              </div> \
              <div class="col"> \
                <h5>10$</h5> \
              </div> \
              <div class="col"> \
                <img src="/images/cocktail.jpg" alt="" width="175" height="175"> \
              </div> \
            </div> \
            <hr class="solid"> \
            <div class="row" style="display: flex; align-items: center;"> \
                <div class="col"> \
                 <h5>Cocktail 2</h5> \
                </div> \
                <div class="col"> \
                  <h5>10$</h5> \
                </div> \
                <div class="col"> \
                  <img src="/images/cocktail.jpg" alt="" width="175" height="175"> \
                </div> \
              </div> \
              <hr class="solid"> \
              <div class="row" style="display: flex; align-items: center;"> \
                  <div class="col"> \
                   <h5>Cocktail 3</h5> \
                  </div> \
                  <div class="col"> \
                    <h5>10$</h5> \
                  </div> \
                  <div class="col"> \
                    <img src="/images/cocktail.jpg" alt="" width="175" height="175"> \
                  </div> \
                </div> \
          </div>';
            break;
      case 'option12':
                choicesDiv.innerHTML = '<div class="non-semantic-protector"> \
                <h1 class="ribbon"> \
                    <strong class="ribbon-content">Alcoholic Beverages</strong> \
                 </h1> \
             </div> \
            <div class="container text-center"> \
                <div class="row" style="display: flex; align-items: center;"> \
                  <div class="col"> \
                   <h5>Cocktail 1</h5> \
                  </div> \
                  <div class="col"> \
                    <h5>10$</h5> \
                  </div> \
                  <div class="col"> \
                    <img src="/images/cocktail.jpg" alt="" width="175" height="175"> \
                  </div> \
                </div> \
                <hr class="solid"> \
                <div class="row" style="display: flex; align-items: center;"> \
                    <div class="col"> \
                     <h5>Cocktail 2</h5> \
                    </div> \
                    <div class="col"> \
                      <h5>10$</h5> \
                    </div> \
                    <div class="col"> \
                      <img src="/images/cocktail.jpg" alt="" width="175" height="175"> \
                    </div> \
                  </div> \
                  <hr class="solid"> \
                  <div class="row" style="display: flex; align-items: center;"> \
                      <div class="col"> \
                       <h5>Cocktail 3</h5> \
                      </div> \
                      <div class="col"> \
                        <h5>10$</h5> \
                      </div> \
                      <div class="col"> \
                        <img src="/images/cocktail.jpg" alt="" width="175" height="175"> \
                      </div> \
                    </div> \
              </div>';
                break;
      default:
        choicesDiv.innerHTML = '';
        break;
    }
  }
  