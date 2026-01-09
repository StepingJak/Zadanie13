$(document).ready(function () {

    const uzytkownicy = {
        istniejace: ["admin", "test", "jakub"]
    };
    $.validator.addMethod("loginWolny", function (value, element) {
        return !uzytkownicy.istniejace.includes(value.toLowerCase());
    }, "Nazwa użytkonika jest zajęta");

    $("#formularz").validate({
        rules: {
            login: {
                required: true,
                minlength: 3,
                loginWolny: true
            },
            imie: {
                required: true,
                minlength: 2
            },
            wiek: {
                required: true,
                digits: true,
                min: 18
            },
            email: {
                required: true,
                email: true
            },
            haslo: {
                required: true,
                minlength: 6
            },
            powtorzHaslo: {
                required: true,
                equalTo: "#haslo"
            }
        },

        messages: {
            login: {
                required: "Podaj nazwę użytkownika",
                minlength: "Login musi mieć co najmniej 3 znaki"
            },
            imie: {
                required: "Pole imię jest wymagane",
                minlength: "Imię musi mieć co najmniej 2 znaki"
            },
            wiek: {
                required: "Pole wiek jest wymagane",
                digits: "Wiek musi zawierać tylko cyfry",
                min: "Musisz mieć co najmniej 18 lat"
            },
            email: {
                required: "Pole e-mail jest wymagane",
                email: "Wprowadź poprawny adres e-mail"
            },
            haslo: {
                required: "Pole hasło jest wymagane",
                minlength: "Hasło musi mieć co najmniej 6 znaków"
            },
            powtorzHaslo: {
                required: "Powtórzenie hasła jest wymagane",
                equalTo: "Hasła nie są takie same"
            }
        },

        submitHandler: function () {
            alert("Formularz został poprawnie wysłany");
        },

        invalidHandler: function () {
            alert("Formularz zawiera błędy");
        }
    });
});
