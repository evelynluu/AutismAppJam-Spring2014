$(function() {
    $('#startgame').click(function() {

        $('body').append('<div id="instruction"><h2 id="content" style="border: 3px, solid, black; background:white;">Please add the items into your basket by clicking on them</h2></div>');
        //apple, banana, broccoli, carrot, tomato
        var foodimages = ["images/apple.jpg", "images/banana.jpg", "images/Broccoli.jpg", "images/carrot.jpg", "images/tomato.jpg"];
        var foodCount = [2, 3, 1, 2, 1];
        var count = 0;
        var foodName = ["Apple", "Banana", "Broccoli", "Carrot", "Tomato"];
        var allZero = function() {
            for (var i = 0; i < 5; i++) {
                if (foodCount[i] != 0) {
                    return false;
                }
            }
            return true;
        };
        var updateShoppingList = function(index) {
            $($('#shoppinglist li span')[index]).html(foodCount[index]);

        };
        var updateInstruction = function() {
            var s = "";
            for (var i = 0; i < 5; i++) {
                if (foodCount[i] < 0) {
                    s += "You Took Too many" + foodName[i] + "<br>";
                }
            }
            document.getElementById("content").innerHTML = s;
        }


        $('#logo').remove();
        $(this).remove();
        $('#gamescreen').load("../ShoppingList.html", function() {
            $('#gamearea div').click(function() {
                var it = null;
                var index = $(this).index() - 1;
                foodCount[index] -= 1;
                //                $($('#shoppinglist li span')[index]).html(food[index] < 0 ? '0' : food[index]);

                var newimage = '<img src=' + foodimages[index] + " class=foodinbasket alt=" + "'" + index + "'" + "/>";
                console.log(newimage);
                $('#basket').append(newimage);

                updateShoppingList(index);
                updateInstruction();
                if (allZero()) {
                    location.replace("checkOut.html");
                }


            });

            $('#basket').on('click', 'img', function(event) {
                //console.log(event);
                var source = $(event.currentTarget);
                var i = source.attr('alt');
                console.log(i);
                foodCount[i] += 1;
                updateShoppingList(i);
                updateInstruction();
                source.remove();
                if (allZero()) {
                    location.replace("checkOut.html");
                }
            });

        });

    });
});