$("#btn-submit1").on('click', function () {
        var endpoint = "/api/data";
        var head = '';
        $("p#error_msg").html('');

        $.ajax({
            method: "GET",
            url: endpoint,
            data: {headinput: head},
            success: function (data) {
                if (data.error_message) {
                    $("p#error_msg").html(data.error_message);
                }
                else {
                    $("p#poem1").html(data.result1);
                    $("p#poem2").html(data.result2);
                    $("p#poem3").html(data.result3);
                    $("p#poem4").html(data.result4);
                    $("p#poem5").html(data.result5);
                    $("p#poem6").html(data.result6);
                    $("p#poem7").html(data.result7);
                    $("p#poem8").html(data.result8);
                }
            },
            error: function (error_data) {
                console.log("error");
                console.log(error_data);
            }
        })
    });

$("#btn-submit2").on('click', function () {
        var endpoint = "/api/data";
        var head = $('#head').val();
        $("p#error_msg").html('');

        $.ajax({
            method: "GET",
            url: endpoint,
            data: {headinput: head},
            success: function (data) {
                if (data.error_message) {
                    $("p#error_msg").html(data.error_message);
                }
                else {
                    $("p#poem1").html(data.result1);
                    $("p#poem2").html(data.result2);
                    $("p#poem3").html(data.result3);
                    $("p#poem4").html(data.result4);
                    $("p#poem5").html(data.result5);
                    $("p#poem6").html(data.result6);
                    $("p#poem7").html(data.result7);
                    $("p#poem8").html(data.result8);
                }
            },
            error: function (error_data) {
                console.log("error");
                console.log(error_data);
            }
        })
    });