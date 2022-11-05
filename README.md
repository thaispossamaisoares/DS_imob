<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Condominio</title>


  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Amatic+SC:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
    rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">

</head>


<body>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="hero d-flex align-items-center section-bg">
    <div class="container">
      <div class="row justify-content-between gy-5">
        <div
          class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2 data-aos="fade-up">JavaCity<br>A melhor casa para suas linguagens!</h2>
          <p data-aos="fade-up" data-aos-delay="100">O melhor DataBase para sua funções predileta, todas as suas classes
            confortavelmente relaxada em nossos servidores.</p>

        </div>
        <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <img src="assets/img/hero-img.png" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300">
        </div>
      </div>
    </div>
  </section><!-- End -->

  <!-- =======  Condominio ======= -->
  <section id="condominio" class="condominio">
    <div class="container" data-aos="fade-up">

      <div class="section-header">
        <h2>Condominio</h2>
        <p>Condominio<span>novo</span>Condominio</p>
      </div>

      <!--Cadastro condominio-->
      <div class="row justify-content-center m-2">

        <div class="col-lg mx-1 d-flex reservation-form-bg justify-content-center">
          <div>

            <div class="section-header  mt-0">
              <p><span>Condominio</span></p>
            </div>

            <form id="cad" method="post" action="#" required  role="form" class="php-email-form" data-aos="fade-up" data-aos-delay="100">

              <div class="my-2 col-lg col-md">
                Nome: <input type="text" name="nome_condominio" maxlength="40"  class="form-control" id="nome_condominio" required
                  placeholder="Nome do Condominio" data-rule="minlen:4">
                <div class="validate"></div>
              </div>

              <div class="my-2 col-lg col-md">
                <input type="text" class="form-control" name="cidade_codominio" id="cidade_codominio"
                  placeholder="Cidade do Condominio" data-rule="minlen:1" data-msg="Insira uma cidade Real">
                <div class="validate"></div>
              </div>

              <div class="px-2 my-2 justify-content-center row">
                <button class="text-center col-lg p-1 m-1 btn btn-info text-white" type="button" id="btn1" onclick='javascript: validarFormulario()'>Cadastrar</button>
                <button class="text-center col-lg p-1 m-1 btn btn-info text-white" type="button" id="btn1" onclick='javascript: validarFormulario()'>Consultar</button>
              </div>
            </form>
          </div>


          <!-- MODAL-->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">Recipient:</label>
                      <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Message:</label>
                      <textarea class="form-control" id="message-text"></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Send message</button>
                </div>
              </div>
            </div>
          </div>



        </div><!-- end Cadastro condominio-->




        <!-- Cadastro Morador -->
        <div class="col-lg m-1 d-flex reservation-form-bg justify-content-center">
          <div>
            <div class="section-header">
              <p><span>Morador</span></p>
            </div>

            <form action="" method="post" role="form" class="php-email-form" data-aos="fade-up" data-aos-delay="100">

              <div class="my-2 col-lg col-md">
                <input type="number" name="id_morador" class="form-control" id="id_morador" placeholder="id do Morador"
                  data-rule="minlen:4" data-msg="Por favor insira pelo menos 4 caracteres">
                <div class="validate"></div>
              </div>

              <div class="my-2 col-lg col-md">
                <input type="text" name="name" class="form-control" id="name" placeholder="Seu nome"
                  data-rule="minlen:4" data-msg="Por favor insira pelo menos 4 caracteres">
                <div class="validate"></div>
              </div>

              <div class="my-2 col-lg col-md">
                <input type="email" class="form-control" name="email" id="email" placeholder="Seu Email"
                  data-rule="email" data-msg="Please enter a valid email">
                <div class="validate"></div>
              </div>

              <div class="my-2 col-lg col-md">
                <input type="number" class="form-control" name="cep" id="cep" placeholder="CEP" data-rule="minlen:8"
                  data-msg="Por favor insira CEP sem tracinho">
                <div class="validate"></div>
              </div>

              <div class=" px-2 my-2  justify-content-center row">
                <input class="text-center col-lg p-1 m-1 btn btn-info text-white" type="submit" name="cadasrar"
                  value="Cadastrar" />

                <input class="text-center col-lg p-1 m-1 btn btn-info text-white" type="submit" name="cadasrar"
                  value="Consultar" />
              </div>
            </form>
          </div>
        </div><!-- end Cadastro Condominio-->

        <!-- Cobrança -->
        <div class="col-lg m-1 d-flex reservation-form-bg justify-content-center">
          <div>

            <div class="section-header ">
              <p><span>Cobrança</span></p>
            </div>

            <form action="" method="post" role="form" class="php-email-form" data-aos="fade-up" data-aos-delay="100">

              <div class="my-2 col-lg col-md">
                <input type="text" name="id_cob_morador" class="form-control" id="id_cob_morador"
                  placeholder="Id do Morador">
                <div class="validate"></div>
              </div>

              <div class="my-2 col-lg col-md">
                <input type="text" class="form-control" name="id_pagamento" id="id_pagamento"
                  placeholder="Id do condominio">
                <div class="validate"></div>
              </div>

              <div class="my-2 col-lg col-md">
                <input type="text" class="form-control" name="tipo_pagamento" id="id_tipoPagamento"
                  placeholder="Tipo do pagamento">
                <div class="validate"></div>
              </div>

              <div class="my-2 col-lg col-md">
                <input type="number" class="form-control" name="valor_pagamento" id="valor_pagamento"
                  placeholder="Valor do pagamento">
                <div class="validate"></div>
              </div>

              <div class="my-2 col-lg col-md">
                <input type="date" class="form-control" name="data_vencimento" id="data_vencimento">
                <div class="validate"></div>
              </div>

              <div class="px-2 my-2 justify-content-center row">

                <input class="text-center col-lg p-1 m-1 btn btn-info text-white" type="submit" name="cadasrar"
                  value="Consultar" />

                <input class="text-center col-lg p-1 m-1 btn btn-info text-white" type="submit" name="cadasrar"
                  value="Pagar" />

              </div>
            </form>

          </div>
        </div><!-- End Cobrança -->

      </div>
    </div>
  </section><!-- End -->


  <section class="condominio">
    <div class="container" data-aos="fade-up">

    </div>
  </section>

  <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i
      class="bi bi-arrow-up-short"></i></a>

  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
  <script>
    //verifica campo com tamanho muito pequeno
    function muitoCurto(campo, nome, tamanho) {
      if (campo.value.length >= tamanho) return false;
      alert("O conteúdo do campo '" + nome
            + "' deve ter pelo menos " + tamanho + " caracteres."
            + " Por favor, preencha-o corretamente.");
      return true;
    }

    //verifica campo com tamanho muito grande
    function tamanhoErrado(campo, nome, tamanho) {
      if (campo.value.length === tamanho) return false;
      alert("O conteúdo do campo '" + nome
            + "' deve ter exatamente " + tamanho + " caracteres. "
            + "Por favor, preencha-o corretamente.");
      return true;
    }
    //verifica campo para nao ser numerico
    function naoNumerico(campo, nome) {
      if (!isNaN(campo.value)) return false;
      alert("Digite somente números no campo '" + nome + "', por favor.");
      return true;
    }
    //verifica campo com caracter 'errado'
    function validarstring($string) {
      return !!preg_match('|^[\pL\s]+$|u', $string);
      }


    function validarFormulario() {
      var cad = document.getElementById('cad');
      if (muitoCurto(cad.nome_condominio, 'Nome', 2)) return;
      cad.submit();
      if (tamanhoErrado(cad.nome_condominio, 'Nome', 50)) return;
      cad.submit();
      if (naoNumerico(cad.nome_condominio, 'Nome', 50)) return;
      cad.submit();
      if (validarstring(cad.nome_condominio, 'Nome', 50)) return;
      cad.submit();

      if (muitoCurto(cad.cidade_codominio, 'Cidade', 2)) return;
      cad.submit();
      if (tamanhoErrado(cad.cidade_codominio, 'Cidade', 50)) return;
      cad.submit();
      if (naoNumerico(cad.cidade_codominio, 'Cidade', 50)) return;
      cad.submit();
      if (validarstring(cad.cidade_codominio, 'Cidade', 50)) return;
      cad.submit();
    }

    //https://pt.stackoverflow.com/questions/300205/validar-nome-e-sobrenome-no-javascript
  </script>

</body>

</html>
