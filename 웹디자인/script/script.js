$(document).ready(function(){
                           start();
                           var imgs = 2;
                           var now = 0;
                            function start(){
                                $(".mainimg img").eq(0).siblings().fadeIn();
                                setInterval(function(){slide();},3000);
                            }
                            function slide(){
                                now = now==imgs?0:now+=1;
                                $(".mainimg img").eq(now).fadeIn();
                                $(".mainimg img").eq(now-1).fadeOut();
                            }
                            });