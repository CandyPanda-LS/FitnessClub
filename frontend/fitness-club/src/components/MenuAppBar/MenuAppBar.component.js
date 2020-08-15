import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// @desc import Components
// @author Dilmi
import UserLogin from "../Login/UserLogin/userlogin.component";
import UserProfile from "../ProfileUpdate/profileUpdate.component";
import UserRegistration from "../Register/registration.component";
// import ForgotPassword from "../Forgotpassword/forgotpassword.component";
import ProfileUpdate from "../ProfileUpdate/profileUpdate.component";

// @desc import Components
// @author Senura
import Footer from "../../components/Footer/Footer.component";
import UserDashboard from "../User/Dashboard/UserDashboard/UserDashboard.component";
import BurnCalories from "../User/Forms/BurnCalories/burncalories";
import DailyMealPlanByUser from "../User/Dashboard/DailyMealPlanByUser/DailyMealPlanByUser.component";
import AddRequirementsToTheInstructor from "../User/Forms/AddRequirementsToTheInstructor/AddRequirementsToTheInstructor.component";
import AddWorkoutMealToDatabase from "../Instructor/AddWorkoutMealToDatabase/AddWorkoutMealToDatabase";

// @desc import Components
// @author Lasal
import EcommerceInsertitem from "../Shop/Forms/AddItem/InsertItem.component";
import ItemsGrid from "../Shop/Pages/ItemsGrid/ItemsGrid.component";
import Item from "../Shop/Pages/Item/Item.component";

// @desc import Components
// @author Ayodya
import InsertFeedback from "../Feedback/InsertFeedback/InsertFeedback.component";
import FeedbackTable from "../Feedback/FeedbackTable/FeedbackTable.component";

// @desc import Components
// @author Dilumi
import InventoryGrid from "../Inventory/InventoryList/Inventory.component";
import InsertInventoryItems from "../Inventory/InsertItems/InsertInventoryItems.component";
import UpdateInventoryItems from "../Inventory/UpdateItems/UpdateInventoryItems";

// @desc import Components
// @author Jayani
import RequestedPlansTable from "../Instructor/UserRequirements/userrequirement";
import UserPlan from "../Instructor/forms/userforms";
import ViewMealWorkoutPlan from "../Instructor/ViewMealWorkoutPlan/ViewMealWorkoutPlan.component";
import UpdateMealWorkoutPlan from "../Instructor/updatemealworkoutplan/updatemealworkoutplan.component";
import ArticleList from "../FitnessUpdates/ArticlesList/ArticleList.component";
import InsertFitnessUpdate from "../FitnessUpdates/InsertFitnessUpdate/InsertFitnessUpdate.component";
import updateFitnessUpdate from "../FitnessUpdates/UpdateFitnessUpdate/updatefitnessupdate.component";
import FitnessUpdatesTable from "../FitnessUpdates/FitnessUpdatesTable/FitnessUpdatesTable.component";

// import { Link } from "@material-ui/core";

export default function MenuAppBar() {
  const [token, setToken] = useState(0);

  useEffect(() => {
    const userToken = localStorage.getItem("x-auth-token");
    setToken(userToken);
  }, []);

  return (
    <Router>
      <div id="wrapper">
        <nav
          style={{
            backgroundImage: "linear-gradient(to bottom, #064564, #73b3fb)",
          }}
          className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion p-0"
        >
          <div className="container-fluid d-flex flex-column p-0">
            <Link className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0">
              <div className="sidebar-brand-icon logo-Desktop">
                <img
                  alt="logo"
                  className="rounded-circle"
                  src="assets/img/logo/logoicon.png"
                  width="50px"
                />
                {/* <i className="fas fa-laugh-wink"></i> */}
              </div>

              <div className="sidebar-brand-text mx-3">
                <span>
                  <img
                    alt="logo"
                    className="rounded-circle"
                    src="assets/img/logo/logoname.png"
                    width="100px"
                  />
                </span>
              </div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <ul className="nav navbar-nav text-light" id="accordionSidebar">
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="/">
                  <i className="fas fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="profile">
                  <i className="fas fa-user"></i>
                  <span>Profile</span>
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="table.html">
                  <i className="fas fa-table"></i>
                  <span>Table</span>
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="userlogin">
                  <i className="far fa-user-circle"></i>
                  <span>Login</span>
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="/registration">
                  <i className="fas fa-user-circle"></i>
                  <span>Register</span>
                </Link>
              </li>
            </ul>
            <div className="text-center d-none d-md-inline">
              <button
                className="btn rounded-circle border-0"
                id="sidebarToggle"
                type="button"
              ></button>
            </div>
          </div>
        </nav>

        {/* Header Nav bar  */}
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
              <div className="container-fluid">
                <button
                  className="btn btn-link d-md-none rounded-circle mr-3"
                  id="sidebarToggleTop"
                  type="button"
                >
                  <i className="fas fa-bars"></i>
                </button>
                <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      className="bg-light form-control border-0 small"
                      type="text"
                      placeholder="Search for ..."
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary py-0" type="button">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <ul className="nav navbar-nav flex-nowrap ml-auto">
                  <li className="nav-item dropdown d-sm-none no-arrow">
                    <Link
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search"></i>
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
                      role="menu"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto navbar-search w-100">
                        <div className="input-group">
                          <input
                            className="bg-light form-control border-0 small"
                            type="text"
                            placeholder="Search for ..."
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-primary py-0"
                              type="button"
                            >
                              <i className="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li
                    className="nav-item dropdown no-arrow mx-1"
                    role="presentation"
                  >
                    <div className="nav-item dropdown no-arrow">
                      <Link
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="badge badge-danger badge-counter">
                          3+
                        </span>
                        <i className="fas fa-bell fa-fw"></i>
                      </Link>
                      <div
                        className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                        role="menu"
                      >
                        <h6 className="dropdown-header">alerts center</h6>
                        <Link className="d-flex align-items-center dropdown-item">
                          <div className="mr-3">
                            <div className="bg-primary icon-circle">
                              <i className="fas fa-file-alt text-white"></i>
                            </div>
                          </div>
                          <div>
                            <span className="small text-gray-500">
                              December 12, 2019
                            </span>
                            <p>A new monthly report is ready to download!</p>
                          </div>
                        </Link>
                        <Link className="d-flex align-items-center dropdown-item">
                          <div className="mr-3">
                            <div className="bg-success icon-circle">
                              <i className="fas fa-donate text-white"></i>
                            </div>
                          </div>
                          <div>
                            <span className="small text-gray-500">
                              December 7, 2019
                            </span>
                            <p>$290.29 has been deposited into your account!</p>
                          </div>
                        </Link>
                        <Link className="d-flex align-items-center dropdown-item">
                          <div className="mr-3">
                            <div className="bg-warning icon-circle">
                              <i className="fas fa-exclamation-triangle text-white"></i>
                            </div>
                          </div>
                          <div>
                            <span className="small text-gray-500">
                              December 2, 2019
                            </span>
                            <p>
                              Spending Alert: We've noticed unusually high
                              spending for your account.
                            </p>
                          </div>
                        </Link>
                        <Link className="text-center dropdown-item small text-gray-500">
                          Show All Alerts
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li
                    className="nav-item dropdown no-arrow mx-1"
                    role="presentation"
                  >
                    <div className="nav-item dropdown no-arrow">
                      <Link
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fas fa-envelope fa-fw"></i>
                        <span className="badge badge-danger badge-counter">
                          7
                        </span>
                      </Link>
                      <div
                        className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                        role="menu"
                      >
                        <h6 className="dropdown-header">alerts center</h6>
                        <Link className="d-flex align-items-center dropdown-item">
                          <div className="dropdown-list-image mr-3">
                            <img
                              alt="logo"
                              className="rounded-circle"
                              src="assets/img/avatars/avatar4.jpeg"
                            />
                            <div className="bg-success status-indicator"></div>
                          </div>
                          <div className="font-weight-bold">
                            <div className="text-truncate">
                              <span>
                                Hi there! I am wondering if you can help me with
                                a problem I've been having.
                              </span>
                            </div>
                            <p className="small text-gray-500 mb-0">
                              Emily Fowler - 58m
                            </p>
                          </div>
                        </Link>
                        <Link className="d-flex align-items-center dropdown-item">
                          <div className="dropdown-list-image mr-3">
                            <img
                              alt="logo"
                              className="rounded-circle"
                              src="assets/img/avatars/avatar2.jpeg"
                            />
                            <div className="status-indicator"></div>
                          </div>
                          <div className="font-weight-bold">
                            <div className="text-truncate">
                              <span>
                                I have the photos that you ordered last month!
                              </span>
                            </div>
                            <p className="small text-gray-500 mb-0">
                              Jae Chun - 1d
                            </p>
                          </div>
                        </Link>
                        <Link className="d-flex align-items-center dropdown-item">
                          <div className="dropdown-list-image mr-3">
                            <img
                              alt="logo"
                              className="rounded-circle"
                              src="assets/img/avatars/avatar3.jpeg"
                            />
                            <div className="bg-warning status-indicator"></div>
                          </div>
                          <div className="font-weight-bold">
                            <div className="text-truncate">
                              <span>
                                Last month's report looks great, I am very happy
                                with the progress so far, keep up the good work!
                              </span>
                            </div>
                            <p className="small text-gray-500 mb-0">
                              Morgan Alvarez - 2d
                            </p>
                          </div>
                        </Link>
                        <Link className="d-flex align-items-center dropdown-item">
                          <div className="dropdown-list-image mr-3">
                            <img
                              alt="avatar"
                              className="rounded-circle"
                              src="assets/img/avatars/avatar5.jpeg"
                            />
                            <div className="bg-success status-indicator"></div>
                          </div>
                          <div className="font-weight-bold">
                            <div className="text-truncate">
                              <span>
                                Am I a good boy? The reason I ask is because
                                someone told me that people say this to all
                                dogs, even if they aren't good...
                              </span>
                            </div>
                            <p className="small text-gray-500 mb-0">
                              Chicken the Dog · 2w
                            </p>
                          </div>
                        </Link>
                        <Link className="text-center dropdown-item small text-gray-500">
                          Show All Alerts
                        </Link>
                      </div>
                    </div>
                    <div
                      className="shadow dropdown-list dropdown-menu dropdown-menu-right"
                      aria-labelledby="alertsDropdown"
                    ></div>
                  </li>
                  <div className="d-none d-sm-block topbar-divider"></div>
                  <li
                    className="nav-item dropdown no-arrow"
                    role="presentation"
                  >
                    <div className="nav-item dropdown no-arrow">
                      <Link
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="d-none d-lg-inline mr-2 text-gray-600 small">
                          {token === 0 ? "user" : "Valerie Luna"}
                        </span>
                        <img
                          alt="profileimage"
                          className="border rounded-circle img-profile"
                          src="assets/img/avatars/avatar1.jpeg"
                        />
                      </Link>
                      <div
                        className="dropdown-menu shadow dropdown-menu-right animated--grow-in"
                        role="menu"
                      >
                        <Link className="dropdown-item" role="presentation">
                          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                          &nbsp;Profile
                        </Link>
                        <Link className="dropdown-item" role="presentation">
                          <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                          &nbsp;Settings
                        </Link>
                        <Link className="dropdown-item" role="presentation">
                          <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                          &nbsp;Activity log
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" role="presentation">
                          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                          &nbsp;Logout
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="container-fluid">
              {/* Routes
              @author Dilmi */}
              {/* <Route path="/forgotpassword" exact component={ForgotPassword} /> */}
              <Route path="/registration" exact component={UserRegistration} />
              <Route path="/profileUpdate" exact component={ProfileUpdate} />
              <Route path="/userlogin" exact component={UserLogin} />

              {/* Routes
              @author Senura */}
              <Route path="/" exact component={UserDashboard} />
              <Route
                path="/addcompletedexerciselist"
                exact
                component={BurnCalories}
              />
              <Route
                path="/adddailymeal"
                exact
                component={DailyMealPlanByUser}
              />
              <Route
                path="/requestplan"
                exact
                component={AddRequirementsToTheInstructor}
              />
              <Route
                path="/addworkoutmeal"
                exact
                component={AddWorkoutMealToDatabase}
              />

              {/* Routes
              @author Lasal */}
              <Route
                path="/insertItemShop"
                exact
                component={EcommerceInsertitem}
              />
              <Route path="/shop" exact component={ItemsGrid} />
              <Route path="/shopItem" exact component={Item} />
              {/* Routes
              @author Dilumi */}
              <Route path="/inventory" exact component={InventoryGrid} />
              <Route
                path="/inventoryitems"
                exact
                component={InsertInventoryItems}
              />
              <Route
                path="/UpdateInventoryitems"
                exact
                component={UpdateInventoryItems}
              />

              {/* Routes
              @author Jayani */}
              <Route path="/userforms" exact component={UserPlan} />
              <Route
                path="/userrequirement"
                exact
                component={RequestedPlansTable}
              />
              <Route
                path="/viewmealworkout"
                exact
                component={ViewMealWorkoutPlan}
              />
              <Route
                path="/updatemealworkoutplan"
                exact
                component={UpdateMealWorkoutPlan}
              />
              <Route path="/articlelist" exact component={ArticleList} />
              <Route
                path="/insertFitnessUpdate"
                exact
                component={InsertFitnessUpdate}
              />
              <Route
                path="/updateFitnessUpdate"
                exact
                component={updateFitnessUpdate}
              />
              <Route
                path="/FitnessUpdatesTable"
                exact
                component={FitnessUpdatesTable}
              />
              {/* Routes
              @author Ayodya */}
              <Route path="/InsertFeedback" exact component={InsertFeedback} />
              <Route path="/FeedbackTable" exact component={FeedbackTable} />
            </div>
          </div>

          <Footer />
        </div>
        <a class="border rounded d-inline scroll-to-top" href="#page-top">
          <i class="fas fa-angle-up"></i>
        </a>
      </div>
    </Router>
  );
}
