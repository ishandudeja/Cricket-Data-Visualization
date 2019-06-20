function drawGraphic() {
    "use strict";
    var t = {
            top: 80,
            right: .1 * $("#graphic").width(),
            bottom: 50,
            left: .2 * $("#graphic").width()
        },
        // deciding width and height for graphic
        width = $("#graphic").width() - t.left - t.right,
        height = $("#graphic").height() - t.top - t.bottom,
        scale_x = d3.scale.linear().range([0, width]),
        scale_y = d3.scale.linear().range([height, 0]),
        a = d3.svg.axis().scale(scale_x).ticks(4).orient("bottom"),
        i = d3.svg.axis().scale(scale_y).ticks(5).orient("left"),

        //defining canvas
        canvas = d3.select("#graphic")
            .append("svg")
            .attr("width", width + t.left + t.right)
            .attr("height", height + t.top + t.bottom)
            .append("g")
            .attr("transform", "translate(" + t.left + "," + t.top + ")");


    d3.csv("players.csv", function (dataItem, dataArray) {

        var playersinfo = [];

        function batting(t) {
            function e() {
                27 === d3.event.keyCode &&
                (this.value = "",
                    this.blur()),
                    search(this.value.trim())
            }

            //search functionality
            function search(t) {
                if (t) {
                    var input = new RegExp("\\b" + d3.requote(t), "i");
                    canvas.classed("g-searching", !0),
                        u.classed("g-match", function (t) {
                            return input.test(t.player) | input.test(t.full_name) | input.test(t.country) | input.test(t.born)
                        });
                    var n = d3.selectAll(".g-match");
                    1 === n[0].length ? tooltip(n.datum()) : o(),
                        f.style("display", null)
                } else o(),
                    canvas.classed("g-searching", !1),
                    u.classed("g-match", !1),
                    f.style("display", "none")
            }

            // tooltip functionality
            var tooltip = function (t) {
                    var e = (d3.event.pageX, d3.event.pageY, scale_x(t.average)),
                        n = scale_y(t.strike_rate);
                    d3.select("#tooltip")
                        .style("left", e + "px")
                        .style("top", n - 20 + "px"),
                        d3.select("#tooltip")
                            .html("<strong>" + t.player + "</strong><br>ODIs played: " + t.matches + "<br>Runs scored: " + t.runs + "<br>Batting average: " + t.average + "<br>Strike rate: " + t.strike_rate + "<br>Fours: " + t.fours + "<br>Sixes: " + t.sixes),
                        d3.select("#tooltip").classed("hidden", !1);

                },
                o = function () {
                    d3.select("#tooltip").classed("hidden", !0)
                };

            //setting axis and transition for batting filter
            scale_x.domain(d3.extent(t, function (t) {
                return t.average
            })).nice(),

                scale_y.domain(d3.extent(t, function (t) {
                    return t.strike_rate
                })).nice(),

                canvas.select(".y.axis").transition().duration(1000).call(i),
                canvas.select(".x.axis").transition().duration(1000).call(a),
                canvas.select(".y.axis .label").text("Batting Strike Rate"),
                canvas.select(".x.axis .label").text("Batting Average");

            var u = canvas.selectAll(".dot").data(t, function (t) {
                return t.player
            });

            //setting transition for dots
            u.transition().duration(1500).attr("cx", function (t) {
                return scale_x(t.average)
            }).attr("cy", function (t) {
                return scale_y(t.strike_rate)
            }), u.exit().remove(), u.enter()

            //create and styling dots
                .append("circle").style("fill", function (t) {
                    return "Australia" == t.country ? "#DACD00" :
                        "New Zealand" == t.country ? "#31384B" :
                            "India" == t.country ? "#0083C8" :
                                "England" == t.country ? "#1A31B0" :
                                    "South Africa" == t.country ? "#00776A" :
                                        "West Indies" == t.country ? "#5D1E26" :
                                            "Pakistan" == t.country ? "#C0D507" :
                                                "Sri Lanka" == t.country ? "#3F6EA6" :
                                                    "Bangladesh" == t.country ? "#327E4B" :
                                                        "orange"
                }).attr("class", "dot")
                .attr("r", 0).transition()
                .duration(1500).attr("r", 7).attr("id", function (t) {
                    return t.player.replace(/ /g, "-").toLowerCase()
                }).attr("cx", function (t) {
                    return scale_x(t.average)
                }).attr("cy", function (t) {
                    return scale_y(t.strike_rate)
                }).style("opacity", function (t) {
                    return t.average <= 1 ? 0 : 0 == t.average ? 0 : .5
                })
                .style("fill", function (t) {
                    return "Australia" == t.country ? "#DACD00" :
                        "New Zealand" == t.country ? "#31384B" :
                            "India" == t.country ? "#0083C8" :
                                "England" == t.country ? "#1A31B0" :
                                    "South Africa" == t.country ? "#00776A" :
                                        "West Indies" == t.country ? "#5D1E26" :
                                            "Pakistan" == t.country ? "#C0D507" :
                                                "Sri Lanka" == t.country ? "#3F6EA6" :
                                                    "Bangladesh" == t.country ? "#327E4B" : "orange"
                }),

                u.on("mouseover", tooltip).on("mouseout", o);

            var displayPlayerInfo = function (data) {
            };

            u.on("click", function (data) {
                console.log(data);

                playersinfo.push(data)
                var detail = d3.select("#detail")

                var div1 = detail.data(playersinfo)
                    .enter()
                    .append("div")
                    .attr("class", "col-lg-6")
                    .append("div")
                    .attr("class", "card mb-3")
                    .style("max-width", "540px")
                    .append("div");

                div1.attr("class", "row no-gutters")
                    .append("div")
                    .attr("class", "col-md-4")
                    .append("img")
                    .attr("src", function (d) {
                        return d.profile;
                    })
                    .attr("height", "100%")
                    .attr("width", "100%")
                    .attr("class", "card-img");

                var cardBody = div1.append("div")
                    .attr("class", "col-md-8")
                    .append("div")
                    .attr("class", "card-body");
                cardBody
                    .append("h5")
                    .attr("class", "card-title").text(function (d) {
                    return d.full_name;
                })
                    .append("h6").text(function (d) {
                    return "Born on: " + d.born;
                });
                cardBody.append("p")
                    .attr("class", "card-text")
                    .html(function (d) {
                        return "Played for: <b>" + d.country +
                            " </b> | Stick Rate: <b>" + d.strike_rate + "</b>";
                    });
                cardBody.append("p")
                    .attr("class", "card-text")
                    .html(function (d) {
                        return "Innings played: <b>" + d.innings + " </b> | Run conceded: <b>" + d.runs_conceded + "</b> | Sixes: <b>" + d.sixes + " </b>| Fours: <b>" + d.fours + "</b>";
                    });
                cardBody.append("p")
                    .attr("class", "card-text")
                    .html(function (d) {
                        return "Fifties:<b>"+d.fifties+"</b> | Hundreds: <b>"+d.hundreds+"</b>";
                    });


                //          .html("<div class='col-lg-6'>"+
                //     "<div class='card mb-3' style='max-width: 540px;'>"+
                //     "<div class='row no-gutters'>"+
                //         "<div class='col-md-4'>"+
                //             "<img src='"+data.profile+"' height='100%' width='100%' class='card-img' >"+
                //        " </div>"+
                //         "<div class='col-md-8'>"+
                //             "<div class='card-body'>"+
                //                 "<h5 class='card-title'>"+data.full_name+"
                // <h6>Born on ("+data.born+")</h6>"+"</h5>"+
                //                 "<p class='card-text'>Played for: <b>"+data.country+" </b> | Stick Rate: <b>"+data.strike_rate+"</b> </p>"+
                //                 "<p class='card-text'>Innings played: <b>"+data.innings+" </b> | Run conceded: <b>"+data.runs_conceded+"</b> | Sixes: <b>"+data.sixes+" </b>| Fours: <b>"+data.fours +"</b></p>"+
                //
                //              "<p class='card-text'>Fifties:<b>"+data.fifties+"</b> | Hundreds: <b>"+data.hundreds+"</b></p>"+
                //             "</div>"+
                //         "</div>"+
                //     "</div>"+
                // "</div>"+
                // "</div>");

            })


            var d = d3.select(".search input").on("keyup", e),
                f = d3.select(".search .search-clear").on("click", function () {
                    d.property("value", "").node().blur(), search()
                })
        }

        function bowling(t) {
            function e() {
                27 === d3.event.keyCode && (this.value = "", this.blur()), n(this.value.trim())
            }

            function n(t) {
                if (t) {
                    var e = new RegExp("\\b" + d3.requote(t), "i");
                    canvas.classed("g-searching", !0), u.classed("g-match", function (t) {
                        return e.test(t.player) | e.test(t.full_name) | e.test(t.country) | e.test(t.born)
                    });
                    var n = d3.selectAll(".g-match");
                    1 === n[0].length ? s(n.datum()) : o(), f.style("display", null)
                } else o(), canvas.classed("g-searching", !1), u.classed("g-match", !1), f.style("display", "none")
            }

            var s = function (t) {
                    var e = (d3.event.pageX, d3.event.pageY, scale_x(t.bowling_average)),
                        n = scale_y(t.balls_bowled);
                    d3.select("#tooltip").style("left", e + "px").style("top", n + "px"), console.log(t), d3.select("#tooltip").html("<strong>" + t.player + "</strong><br>ODIs played: " + t.matches + "<br>Wickets taken: " + t.wickets_taken + "<br>Bowling average: " + t.bowling_average + "<br>Economy rate: " + t.economy_rate), d3.select("#tooltip").classed("hidden", !1)
                },
                o = function () {
                    d3.select("#tooltip").classed("hidden", !0)
                };
            scale_x.domain(d3.extent(t, function (t) {
                return t.bowling_average
            })).nice(), scale_y.domain(d3.extent(t, function (t) {
                return t.balls_bowled
            })).nice(), canvas.select(".y.axis").transition().duration(500).call(i), canvas.select(".x.axis").transition().duration(500).call(a), canvas.select(".y.axis .label").text("Balls Bowled"), canvas.select(".x.axis .label").text("Bowling Average");
            var u = canvas.selectAll(".dot").data(t, function (t) {
                return t.player
            });
            u.exit().remove(), u.transition().duration(1500).attr("cx", function (t) {
                return scale_x(t.bowling_average)
            }).attr("cy", function (t) {
                return scale_y(t.balls_bowled)
            }), u.exit().remove(), u.enter().append("circle").style("fill", function (t) {
                return "Australia" == t.country ? "#DACD00" : "New Zealand" == t.country ? "#31384B" : "India" == t.country ? "#0083C8" : "England" == t.country ? "#1A31B0" : "South Africa" == t.country ? "#00776A" : "West Indies" == t.country ? "#5D1E26" : "Pakistan" == t.country ? "#C0D507" : "Sri Lanka" == t.country ? "#3F6EA6" : "Bangladesh" == t.country ? "#327E4B" : "orange"
            }).attr("class", "dot").attr("r", 0).transition().duration(1500).attr("r", 7).attr("id", function (t) {
                return t.player
            }).attr("cx", function (t) {
                return scale_x(t.bowling_average)
            }).attr("cy", function (t) {
                return scale_y(t.balls_bowled)
            }).style("opacity", function (t) {
                return t.bowling_average <= 1 ? 0 : 0 == t.bowling_average ? 0 : .5
            }).style("fill", function (t) {
                return "Australia" == t.country ? "#DACD00" : "New Zealand" == t.country ? "#31384B" : "India" == t.country ? "#0083C8" : "England" == t.country ? "#1A31B0" : "South Africa" == t.country ? "#00776A" : "West Indies" == t.country ? "#5D1E26" : "Pakistan" == t.country ? "#C0D507" : "Sri Lanka" == t.country ? "#3F6EA6" : "Bangladesh" == t.country ? "#327E4B" : "orange"
            }), u.on("mouseover", s).on("mouseout", o);
            var d = d3.select(".search input").on("keyup", e),
                f = d3.select(".search .search-clear").on("click", function () {
                    d.property("value", "").node().blur(), n()
                })
        }

        function economy(t) {
            function e() {
                27 === d3.event.keyCode && (this.value = "", this.blur()), n(this.value.trim())
            }

            function n(t) {
                if (t) {
                    var e = new RegExp("\\b" + d3.requote(t), "i");
                    canvas.classed("g-searching", !0), u.classed("g-match", function (t) {
                        return e.test(t.player) | e.test(t.full_name) | e.test(t.country) | e.test(t.born)
                    });
                    var n = d3.selectAll(".g-match");
                    1 === n[0].length ? s(n.datum()) : o(), f.style("display", null)
                } else o(), canvas.classed("g-searching", !1), u.classed("g-match", !1), f.style("display", "none")
            }

            var s = function (t) {
                    var e = (d3.event.pageX, d3.event.pageY, scale_x(t.economy_rate)),
                        n = scale_y(t.wickets_taken);
                    d3.select("#tooltip").style("left", e + "px").style("top", n + "px"), console.log(t), d3.select("#tooltip").html("<strong>" + t.player + "</strong><br>ODIs played: " + t.matches + "<br>Wickets taken: " + t.wickets_taken + "<br>Bowling average: " + t.bowling_average + "<br>Economy rate: " + t.economy_rate), d3.select("#tooltip").classed("hidden", !1)
                },
                o = function () {
                    d3.select("#tooltip").classed("hidden", !0)
                };
            scale_x.domain(d3.extent(t, function (t) {
                return t.economy_rate
            })).nice(), scale_y.domain(d3.extent(t, function (t) {
                return t.wickets_taken
            })).nice(), canvas.select(".y.axis").transition().duration(500).call(i), canvas.select(".x.axis").transition().duration(500).call(a), canvas.select(".y.axis .label").text("Wickets taken"), canvas.select(".x.axis .label").text("Economy rate");
            var u = canvas.selectAll(".dot").data(t, function (t) {
                return t.player
            });
            u.exit().remove(), u.transition().duration(1500).attr("cx", function (t) {
                return scale_x(t.economy_rate)
            }).attr("cy", function (t) {
                return scale_y(t.wickets_taken)
            }), u.exit().remove(), u.enter().append("circle").style("fill", function (t) {
                return "Australia" == t.country ? "#DACD00" : "New Zealand" == t.country ? "#31384B" : "India" == t.country ? "#0083C8" : "England" == t.country ? "#1A31B0" : "South Africa" == t.country ? "#00776A" : "West Indies" == t.country ? "#5D1E26" : "Pakistan" == t.country ? "#C0D507" : "Sri Lanka" == t.country ? "#3F6EA6" : "Bangladesh" == t.country ? "#327E4B" : "orange"
            }).attr("class", "dot").attr("r", 0).transition().duration(1500).attr("r", 7).attr("name", function (t) {
                return t.full_name
            }).attr("cx", function (t) {
                return scale_x(t.economy_rate)
            }).attr("cy", function (t) {
                return scale_y(t.wickets_taken)
            }).style("opacity", function (t) {
                return t.wickets_taken <= 1 ? 0 : 0 === t.wickets_taken ? 0 : .5
            }).style("fill", function (t) {
                return "Australia" == t.country ? "#DACD00" : "New Zealand" == t.country ? "#31384B" : "India" == t.country ? "#0083C8" : "England" == t.country ? "#1A31B0" : "South Africa" == t.country ? "#00776A" : "West Indies" == t.country ? "#5D1E26" : "Pakistan" == t.country ? "#C0D507" : "Sri Lanka" == t.country ? "#3F6EA6" : "Bangladesh" == t.country ? "#327E4B" : "orange"
            }), u.on("mouseover", s).on("mouseout", o);
            var d = d3.select(".search input").on("keyup", e),
                f = d3.select(".search .search-clear").on("click", function () {
                    d.property("value", "").node().blur(), n()
                })
        }

        dataArray.forEach(function (t) {
            t.matches = +t.matches,
                t.runs = +t.runs,
                t.average = +t.average,
                t.balls_faced = +t.balls_faced,
                t.strike_rate = +t.strike_rate,
                t.balls_bowled = +t.balls_bowled,
                t.bowling_strike_rate = +t.bowling_strike_rate,
                t.runs_conceded = +t.runs_conceded,
                t.bowling_average = +t.bowling_average,
                t.economy_rate = +t.economy_rate,
                t.full_name = t.full_name,
                t.player = t.player,
                t.wickets_taken = +t.wickets_taken
        });

        var matches = dataArray.filter(function (t) {
                return t.matches > 20
            }),

            balls_bowled = dataArray.filter(function (t) {
                return t.balls_bowled > 1200
            }),

            g = matches.filter(function (t) {
                return "New Zealand" === t.country
            }),
            h = matches.filter(function (t) {
                return "Australia" == t.country
            }),
            A = matches.filter(function (t) {
                return "India" === t.country
            }),
            k = matches.filter(function (t) {
                return "South Africa" === t.country
            }),
            p = matches.filter(function (t) {
                return "West Indies" === t.country
            }),
            b = matches.filter(function (t) {
                return "Pakistan" === t.country
            }),
            m = matches.filter(function (t) {
                return "England" === t.country
            }),
            v = matches.filter(function (t) {
                return "Bangladesh" === t.country
            }),
            _ = matches.filter(function (t) {
                return "Sri Lanka" === t.country
            }),
            w = balls_bowled.filter(function (t) {
                return "New Zealand" === t.country
            }),
            x = balls_bowled.filter(function (t) {
                return "Australia" === t.country
            }),
            B = balls_bowled.filter(function (t) {
                return "India" === t.country
            }),
            E = balls_bowled.filter(function (t) {
                return "South Africa" === t.country
            }),
            D = balls_bowled.filter(function (t) {
                return "West Indies" === t.country
            }),
            I = balls_bowled.filter(function (t) {
                return "Pakistan" === t.country
            }),
            S = balls_bowled.filter(function (t) {
                return "England" === t.country
            }),
            C = balls_bowled.filter(function (t) {
                return "Bangladesh" === t.country
            }),
            N = balls_bowled.filter(function (t) {
                return "Sri Lanka" === t.country
            }),
            Z = matches.filter(function (t) {
                return "New Zealand" === t.country | "Australia" == t.country
            }),
            W = matches.filter(function (t) {
                return "New Zealand" === t.country | "South Africa" === t.country
            }),
            P = matches.filter(function (t) {
                return "New Zealand" === t.country | "India" === t.country
            }),
            z = matches.filter(function (t) {
                return "New Zealand" === t.country | "West Indies" === t.country
            }),
            L = matches.filter(function (t) {
                return "India" === t.country | "Pakistan" === t.country
            }),
            R = matches.filter(function (t) {
                return "Australia" === t.country | "South Africa" === t.country
            }),
            F = matches.filter(function (t) {
                return "Australia" === t.country | "Pakistan" === t.country
            }),
            Y = matches.filter(function (t) {
                return "Australia" === t.country | "India" === t.country
            }),
            $ = matches.filter(function (t) {
                return "England" === t.country | "Bangladesh" === t.country
            }),
            q = balls_bowled.filter(function (t) {
                return "New Zealand" === t.country | "Australia" == t.country
            }),
            O = balls_bowled.filter(function (t) {
                return "New Zealand" === t.country | "South Africa" === t.country
            }),
            X = balls_bowled.filter(function (t) {
                return "New Zealand" === t.country | "India" === t.country
            }),
            G = balls_bowled.filter(function (t) {
                return "Australia" === t.country | "Pakistan" === t.country
            }),
            T = balls_bowled.filter(function (t) {
                return "New Zealand" === t.country | "West Indies" === t.country
            }),
            j = balls_bowled.filter(function (t) {
                return "India" === t.country | "Pakistan" === t.country
            }),
            H = balls_bowled.filter(function (t) {
                return "Australia" === t.country | "South Africa" === t.country
            }),
            J = balls_bowled.filter(function (t) {
                return "Australia" === t.country | "India" === t.country
            }),
            K = balls_bowled.filter(function (t) {
                return "England" === t.country | "Bangladesh" === t.country
            });

        canvas.append("g").attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(a).append("text").attr("class", "label")
            .attr("x", width).attr("y", -6)
            .style("text-anchor", "end")
            .text("Batting Average"),
            canvas.append("g")
                .attr("class", "y axis")
                .call(i).append("text")
                .attr("class", "label")
                .attr("transform", "rotate(-90)")
                .attr("y", 6).attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Batting Strike Rate"),
            batting(matches), d3.selectAll(".bowling_statistics")
            .classed("hidden", !0),
            d3.selectAll(".economy_statistics")
                .classed("hidden", !0),
            d3.selectAll(".versus_statistics")
                .classed("hidden", !0),
            d3.selectAll(".versusb_statistics")
                .classed("hidden", !0),


            d3.selectAll(".nz").on("click", function () {
                batting(g)
            }), d3.selectAll(".aus").on("click", function () {
            batting(h)
        }), d3.selectAll(".ind").on("click", function () {
            batting(A)
        }), d3.selectAll(".sa").on("click", function () {
            batting(k)
        }), d3.selectAll(".wi").on("click", function () {
            batting(p)
        }), d3.selectAll(".pak").on("click", function () {
            batting(b)
        }), d3.selectAll(".eng").on("click", function () {
            batting(m)
        }), d3.selectAll(".bng").on("click", function () {
            batting(v)
        }), d3.selectAll(".srl").on("click", function () {
            batting(_)
        }), d3.selectAll(".all_teams").on("click", function () {
            batting(matches)
        }), d3.selectAll(".nzb").on("click", function () {
            bowling(w)
        }), d3.selectAll(".ausb").on("click", function () {
            bowling(x)
        }), d3.selectAll(".indb").on("click", function () {
            bowling(B)
        }), d3.selectAll(".sab").on("click", function () {
            bowling(E)
        }), d3.selectAll(".srlb").on("click", function () {
            bowling(N)
        }), d3.selectAll(".wib").on("click", function () {
            bowling(D)
        }), d3.selectAll(".pakb").on("click", function () {
            bowling(I)
        }), d3.selectAll(".engb").on("click", function () {
            bowling(S)
        }), d3.selectAll(".bngb").on("click", function () {
            bowling(C)
        }), d3.selectAll(".all_teamsb").on("click", function () {
            bowling(balls_bowled)
        }), d3.selectAll(".nze").on("click", function () {
            economy(w)
        }), d3.selectAll(".ause").on("click", function () {
            economy(x)
        }), d3.selectAll(".inde").on("click", function () {
            economy(B)
        }), d3.selectAll(".sae").on("click", function () {
            economy(E)
        }), d3.selectAll(".srle").on("click", function () {
            economy(N)
        }), d3.selectAll(".wie").on("click", function () {
            economy(D)
        }), d3.selectAll(".pake").on("click", function () {
            economy(I)
        }), d3.selectAll(".enge").on("click", function () {
            economy(S)
        }), d3.selectAll(".bnge").on("click", function () {
            economy(C)
        }), d3.selectAll(".all_teamse").on("click", function () {
            economy(balls_bowled)
        }), d3.selectAll(".nzau").on("click", function () {
            batting(Z)
        }), d3.select(".auspak").on("click", function () {
            batting(F)
        }), d3.selectAll(".nzsa").on("click", function () {
            batting(W)
        }), d3.selectAll(".nzin").on("click", function () {
            batting(P)
        }), d3.selectAll(".nzwi").on("click", function () {
            batting(z)
        }), d3.selectAll(".indpak").on("click", function () {
            batting(L)
        }), d3.selectAll(".aussa").on("click", function () {
            batting(R)
        }), d3.selectAll(".auind").on("click", function () {
            batting(Y)
        }), d3.selectAll(".engban").on("click", function () {
            batting($)
        }), d3.selectAll(".nzaub").on("click", function () {
            bowling(q)
        }), d3.selectAll(".nzsab").on("click", function () {
            bowling(O)
        }), d3.selectAll(".nzinb").on("click", function () {
            bowling(X)
        }), d3.selectAll(".nzwib").on("click", function () {
            bowling(T)
        }), d3.selectAll(".auspakb").on("click", function () {
            bowling(G)
        }), d3.selectAll(".indpakb").on("click", function () {
            bowling(j)
        }), d3.selectAll(".aussab").on("click", function () {
            bowling(H)
        }), d3.selectAll(".auindb").on("click", function () {
            bowling(J)
        }), d3.selectAll(".engbanb").on("click", function () {
            bowling(K)
        }), d3.select("#bowling").on("click", function () {
            bowling(balls_bowled), d3.selectAll(".batting_statistics").classed("hidden", !0), d3.selectAll(".economy_statistics").classed("hidden", !0), d3.selectAll(".bowling_statistics").classed("hidden", !1), d3.selectAll(".versus_statistics").classed("hidden", !0), d3.selectAll(".versusb_statistics").classed("hidden", !0)
        }), d3.select("#batting").on("click", function () {
            batting(matches), d3.selectAll(".batting_statistics").classed("hidden", !1), d3.selectAll(".economy_statistics").classed("hidden", !0), d3.selectAll(".bowling_statistics").classed("hidden", !0), d3.selectAll(".versus_statistics").classed("hidden", !0), d3.selectAll(".versusb_statistics").classed("hidden", !0)
        }), d3.select("#econ_rate").on("click", function () {
            economy(balls_bowled), d3.selectAll(".economy_statistics").classed("hidden", !1), d3.selectAll(".batting_statistics").classed("hidden", !0), d3.selectAll(".bowling_statistics").classed("hidden", !0), d3.selectAll(".versus_statistics").classed("hidden", !0), d3.selectAll(".versusb_statistics").classed("hidden", !0)
        }), d3.select("#versus").on("click", function () {
            batting(Z), d3.selectAll(".economy_statistics").classed("hidden", !0), d3.selectAll(".batting_statistics").classed("hidden", !0), d3.selectAll(".bowling_statistics").classed("hidden", !0), d3.selectAll(".versus_statistics").classed("hidden", !1), d3.selectAll(".versusb_statistics").classed("hidden", !0)
        }), d3.select("#versusb").on("click", function () {
            bowling(q), d3.selectAll(".economy_statistics").classed("hidden", !0), d3.selectAll(".batting_statistics").classed("hidden", !0), d3.selectAll(".bowling_statistics").classed("hidden", !0), d3.selectAll(".versus_statistics").classed("hidden", !0), d3.selectAll(".versusb_statistics").classed("hidden", !1)
        })
    })
}

drawGraphic();