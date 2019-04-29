const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    const { filename: avatar } = req.file
    const { name, email, password, provider } = req.body

    if (!name || name.length === 0) {
      req.flash('error', 'Informe o nome')
      return res.redirect('/signup')
    }

    if (!email || email.length === 0) {
      req.flash('error', 'Informe o E-mail')
      return res.redirect('/signup')
    }

    if (!password || password.length === 0) {
      req.flash('error', 'Informe a senha')
      return res.redirect('/signup')
    }
    console.log(req.body)
    await User.create({ name, email, password, provider, avatar })

    req.flash('success', 'Usuário cadastrado com sucesso!')
    return res.redirect('/')
  }
}

module.exports = new UserController()
