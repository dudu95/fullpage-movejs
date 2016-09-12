/**
 * Created by Administrator on 2016-08-21.
 */
$(document).ready(function(){
    $('#main').fullpage({
        verticalCentered:false,
        anchors:['page1','page2','page3','page4'],
        navigation:true,
        navigationTooltips:['page1','page2','page3','page4'],
        afterLoad:function(anchorLink,index){
            switch (index){
                case 1:
                    move('.section1 h1').scale(1.5).end();
                    move('.section1 p').set('margin-top','5%').end();
                    break;
                case 2:
                    move('.section2 h1').scale(0.8).end();
                    break;
                case 3:
                    move('.section3 h1').set('margin-left','20%').end();
                    move('.section3 p').set('margin-left','10%').end();
                    break;
                case 4:
                    move('.section4 .primary').rotate(360).end(function(){
                        move('.section4 .sport').rotate(360).end(function(){
                            move('.section4 .edition').rotate(360).end(function(){
                                move('h4.primary').scale(1.3).end(function(){
                                    move('h4.sport').scale(1.3).end(function(){
                                        move('h4.edition').scale(1.3).end();
                                    })
                                })
                            })
                        })
                    });
                    break;
                default :
                    break;
            }
        },

        onLeave:function(index,nextIndex,direction){
            switch (index){
                case 1:
                    move('.section1 h1').scale(1).end();
                    move('.section1 p').set('margin-top','120%').end();
                    break;
                case 2:
                    move('.section2 h1').scale(1).end();
                    break;
                case 3:
                    move('.section3 h1').set('margin-left','-80%').end();
                    move('.section3 p').set('margin-left','150%').end();
                    break;
                case 4:
                    move('.section4 .primary').rotate(-360).end();
                    move('.section4 .sport').rotate(-360).end();
                    move('.section4 .edition').rotate(-360).end();
                    move('h4.primary').scale(1).end();
                    move('h4.sport').scale(1).end();
                    move('h4.edition').scale(1).end();
                    break;
                default :
                    break;
            }
        }

    });
})