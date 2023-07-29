package dao

import javax.inject.{Inject, Singleton}
import play.api.db.slick.DatabaseConfigProvider
import slick.jdbc.JdbcProfile
import models._

import scala.concurrent.{Future, ExecutionContext}

@Singleton
class BookDAO @Inject() (dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext) {
  private val dbConfig = dbConfigProvider.get[JdbcProfile]

  import dbConfig._
  import profile.api._

private class BookTable(tag: Tag) extends Table[Book](tag, Some("books"), "Book") {
  def isbn = column[String]("isbn", O.PrimaryKey)
  def title = column[String]("title")
  def appendixPage = column[Int]("appendix_page")

  def * = (isbn, title, appendixPage) <> ((Book.apply _).tupled, Book.unapply)
}



  private val books = TableQuery[BookTable]

  def list(): Future[Seq[Book]] = db.run {
    books.result
  }
}
