package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import dao.BookDAO
import play.api.libs.json._
import scala.concurrent.ExecutionContext

@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents, bookDao: BookDAO)(implicit ec: ExecutionContext) extends BaseController {

  def index() = Action.async { implicit request: Request[AnyContent] =>
    bookDao.list().map { books =>
      Ok(Json.toJson(books)).as(JSON)
    }
  }
}
