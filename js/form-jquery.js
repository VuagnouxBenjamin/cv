$(function() {
    let $contact_form = $("#contact-form")
    if ($contact_form.length) {
        $contact_form.validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                mail_object: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                email: {
                    required: 'Veuillez entrer un email.',
                    email: 'Email incorrect, veuillez reessayer.'
                },
                mail_object: {
                    required: "Veuillez préciser votre objet."
                },
                message: {
                    required: "N'oubliez pas votre message."
                }
            },
            errorPlacement: function(error, element) {
                error.insertAfter(element.next())
            }
        })
    }
})